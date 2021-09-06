import {
	useColorMode,
	Switch,
	Flex,
	Button,
	IconButton,
} from "@chakra-ui/react";
import { useState } from "react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

export const DarkModeSwitch = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const isDark = colorMode === "dark";

	// Hamburger Menu Controls
	const [display, changeDisplay] = useState("none");

	return (
		<Flex>
			<Flex position="fixed" top="1rem" right="1rem" align="center">
				{/* On theme.js there are 4 breakpoints, we only want to display flex on large screens */}
				<Flex display={["none", "none", "flex", "flex"]}>
					{/* Nav Links */}
					<NextLink href="/" passHref>
						<Button
							as="a"
							variant="ghost"
							aria-label="Home"
							my={5}
							w="100%"
						>
							Home
						</Button>
					</NextLink>

					<NextLink href="/about" passHref>
						<Button
							as="a"
							variant="ghost"
							aria-label="About"
							my={5}
							w="100%"
						>
							About
						</Button>
					</NextLink>

					<NextLink href="/contact" passHref>
						<Button
							as="a"
							variant="ghost"
							aria-label="Contact"
							my={5}
							w="100%"
						>
							Contact
						</Button>
					</NextLink>
				</Flex>

				{/* Switch */}
				<Switch
					color="green"
					mr={2}
					mt={2}
					isChecked={isDark}
					onChange={toggleColorMode}
				/>
				{/* Hamburger Icon */}
				<IconButton
					aria-label="Open Menu"
					size="lg"
					mr={2}
					mt={2}
					icon={<HamburgerIcon />}
					display={["flex", "flex", "none", "none"]}
					onClick={() => changeDisplay("flex")}
				/>
			</Flex>

			{/* Mobile */}
			<Flex
				w="100vw"
				bgColor="gray.50"
				zIndex={20}
				h="30vh"
				pos="fixed"
				top="0"
				left="0"
				overflowY="auto"
				flexDir="column"
				display={display}
			>
				{/* Close Dropdown Button */}
				<Flex justify="flex-end">
					<IconButton
						mt={6}
						mr={6}
						aria-label="Close Menu"
						size="lg"
						icon={<CloseIcon />}
						onClick={() => changeDisplay("none")}
					/>
				</Flex>
				{/* Hamburger Dropdown Menu */}
				<Flex flexDir="column" align="center">
					{/* Nav Links */}
					<NextLink href="/" passHref>
						<Button
							as="a"
							variant="ghost"
							aria-label="Home"
							my={2}
							w="100%"
						>
							Home
						</Button>
					</NextLink>

					<NextLink href="/about" passHref>
						<Button
							as="a"
							variant="ghost"
							aria-label="About"
							my={2}
							w="100%"
						>
							About
						</Button>
					</NextLink>

					<NextLink href="/contact" passHref>
						<Button
							as="a"
							variant="ghost"
							aria-label="Contact"
							my={2}
							w="100%"
						>
							Contact
						</Button>
					</NextLink>
				</Flex>
			</Flex>
		</Flex>
	);
};
