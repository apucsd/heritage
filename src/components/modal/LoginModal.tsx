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
  Checkbox,
  Input,
  Link,
} from "@nextui-org/react";
import { LockIcon, MailIcon } from "lucide-react";
import { useLoginUserMutation } from "@/redux/api/authApi";
import Swal from "sweetalert2";
import { decodedToken } from "@/lib/decodedToken";
import { useAppDispatch } from "@/redux/hooks";
import { setUser } from "@/redux/api/features/authSlice";

export default function LoginModal() {
  const dispatch = useAppDispatch();
  const [loginUser] = useLoginUserMutation();
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const [email, setEmail] = useState("apusutradhar77@gmail.com");
  const [password, setPassword] = useState("111111");
  const [emailError, setEmailError] = useState(""); // State to hold email error message
  const [passwordError, setPasswordError] = useState(""); // State to hold password error message

  const validateEmail = (email: string) => {
    // Simple regex for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string) => {
    // Example: Password should be at least 6 characters long
    return password.length >= 6;
  };

  const handleLogin = async () => {
    let hasError = false;

    // Validate email
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      hasError = true;
    } else {
      setEmailError(""); // Clear error if email is valid
    }

    // Validate password
    if (!validatePassword(password)) {
      setPasswordError("Password must be at least 6 characters long.");
      hasError = true;
    } else {
      setPasswordError(""); // Clear error if password is valid
    }

    if (hasError) return; // Stop if there are validation errors

    // Proceed with login if no validation errors
    // console.log({ email, password });
    try {
      const userInfo = { email, password };
      const res = await loginUser(userInfo).unwrap();
      if (res.success) {
        // console.log(res);
        const user = decodedToken(res?.token);
        dispatch(
          setUser({
            user: user,
            token: res?.token,
          })
        );
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your login was successfully logged in",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error: any) {
      console.log(error);
      Swal.fire(error?.data?.message || "Something went wrong");
    }

    onClose();
  };

  return (
    <>
      <button className="font-semibold" onClick={onOpen}>
        Login
      </button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
              <ModalBody>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoFocus
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
                <div className="flex py-2 px-1 justify-between">
                  <Checkbox
                    required
                    classNames={{
                      label: "text-small",
                    }}
                  >
                    Remember me
                  </Checkbox>
                  <Link color="primary" href="#" size="sm">
                    Forgot password?
                  </Link>
                </div>
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
                <Button onClick={handleLogin} radius="sm" color="primary">
                  Sign in
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
