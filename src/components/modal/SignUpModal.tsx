"use client";
import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  Link,
} from "@nextui-org/react";
import { LockIcon, MailIcon, UserIcon, PhoneIcon } from "lucide-react";
import { useRegisterUserMutation } from "@/redux/api/authApi";
import Swal from "sweetalert2";

export default function SignUpModal() {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();

  const [registerUser] = useRegisterUserMutation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState(""); // State to hold name error message
  const [emailError, setEmailError] = useState(""); // State to hold email error message
  const [phoneError, setPhoneError] = useState(""); // State to hold phone error message
  const [passwordError, setPasswordError] = useState(""); // State to hold password error message

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string) => {
    // Example: Phone should be a valid phone number
    const phoneRegex = /^[0-9]{11}$/; // Adjust based on phone number format
    return phoneRegex.test(phone);
  };

  const validatePassword = (password: string) => {
    return password.length >= 6;
  };

  const handleSignUp = async () => {
    let hasError = false;

    // Validate name
    if (!name.trim()) {
      setNameError("Name is required.");
      hasError = true;
    } else {
      setNameError(""); // Clear error if name is valid
    }

    // Validate email
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      hasError = true;
    } else {
      setEmailError(""); // Clear error if email is valid
    }

    // Validate phone
    if (!validatePhone(phone)) {
      setPhoneError("Please enter a valid phone number.");
      hasError = true;
    } else {
      setPhoneError(""); // Clear error if phone is valid
    }

    // Validate password
    if (!validatePassword(password)) {
      setPasswordError("Password must be at least 6 characters long.");
      hasError = true;
    } else {
      setPasswordError(""); // Clear error if password is valid
    }

    if (hasError) return; // Stop if there are validation errors

    // Proceed with sign up if no validation errors
    // console.log({ name, email, phone, password });
    try {
      const userInfo = { name, email, phone, password };
      const res = await registerUser(userInfo).unwrap();
      if (res.success) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your registration was successfully registered",
          showConfirmButton: false,
          timer: 1500,
        });
        onClose();
      }
    } catch (error: any) {
      console.log(error);
      Swal.fire(error?.data?.message || "Something went wrong");
    }
  };

  return (
    <>
      <button className="font-semibold" onClick={onOpen}>
        Sign Up
      </button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Sign Up</ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  endContent={
                    <UserIcon className="text-xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Name"
                  placeholder="Enter your name"
                  variant="bordered"
                />
                {nameError && (
                  <p className="text-red-500 text-sm mt-1">{nameError}</p> // Display name error message
                )}
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  endContent={
                    <MailIcon className="text-xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Email"
                  placeholder="Enter your email"
                  variant="bordered"
                />
                {emailError && (
                  <p className="text-red-500 text-sm mt-1">{emailError}</p> // Display email error message
                )}
                <Input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  endContent={
                    <LockIcon className="text-xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  variant="bordered"
                />
                {passwordError && (
                  <p className="text-red-500 text-sm mt-1">{passwordError}</p> // Display password error message
                )}
                <Input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  endContent={
                    <PhoneIcon className="text-xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Phone"
                  placeholder="Enter your phone number"
                  variant="bordered"
                />
                {phoneError && (
                  <p className="text-red-500 text-sm mt-1">{phoneError}</p> // Display phone error message
                )}
              </ModalBody>
              <ModalFooter>
                <Button
                  radius="sm"
                  className="text-white"
                  color="secondary"
                  variant="solid"
                  onPress={onClose}
                >
                  Close
                </Button>
                <Button onClick={handleSignUp} radius="sm" color="primary">
                  Sign Up
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
