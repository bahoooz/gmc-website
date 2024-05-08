"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";
import { Avatar } from "@nextui-org/avatar";

export default function NavbarComponent() {
  const [isCurrentUser, setIsCurrentUser] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Accueil",
    "Boutique",
    "Nous contacter",
    "La communauté sur Discord",
  ];
  const linkItems = ["#", "/shop", "/contact", "/discord-community"];
  return (
    <Navbar
      className="bg-black h-16"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarBrand className="hidden md:flex">
        <Image
          className="w-8"
          src="/logo_gmc.png"
          alt="logo"
          width={120}
          height={120}
        />
      </NavbarBrand>
      <NavbarContent className="md:hidden" justify="start">
        <NavbarMenuToggle
          className="text-white"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>
      <NavbarContent className="text-white gap-12 hidden md:flex">
        <NavbarItem>
          <Link href="/">Accueil</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/shop">Boutique</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/contact">Nous contacter</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/discord-community">La communauté sur Discord</Link>
        </NavbarItem>
      </NavbarContent>
      {isCurrentUser ? (
        <NavbarContent justify="end">
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                color="secondary"
                as="button"
                className="transition-transform"
                name="Bahoz"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Connecté sur</p>
                <p className="font-semibold">bahoz.config@gmail.com</p>
              </DropdownItem>
              <DropdownItem key="account" href="/user/user3">
                Mon compte
              </DropdownItem>
              <DropdownItem key="logout" color="danger">
                Déconnexion
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
      ) : (
        <NavbarContent justify="end">
          <Button as={Link} href="/connexion" color="secondary">
            Connexion
          </Button>
        </NavbarContent>
      )}
      <NavbarMenu className="bg-black text-white">
        <NavbarMenuItem>
          <Link className="w-full" href="/" onClick={() => setIsMenuOpen(false)}>
            Accueil
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className="w-full" href="/shop" onClick={() => setIsMenuOpen(false)}>
            Boutique
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className="w-full" href="/contact" onClick={() => setIsMenuOpen(false)}>
            Nous contacter
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className="w-full" href="/discord-community" onClick={() => setIsMenuOpen(false)}>
            La communauté sur Discord
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
