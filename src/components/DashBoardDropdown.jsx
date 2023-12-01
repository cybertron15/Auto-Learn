import React from 'react'
import { DropdownMenu, Button, AlertDialog, Flex } from '@radix-ui/themes'
import { Menu } from 'lucide-react'

function DashBoardDropdown() {
    return (
        <AlertDialog.Root>
            <DropdownMenu.Root >
                <DropdownMenu.Trigger>
                    <Button variant="soft" style={{ cursor: "pointer" }}>
                        <Menu />
                    </Button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content style={{ width: "150px" }}>
                    <DropdownMenu.Item shortcut="">Profile</DropdownMenu.Item>
                    <DropdownMenu.Item shortcut="">Analytics</DropdownMenu.Item>
                    <DropdownMenu.Separator />
                    <AlertDialog.Trigger>
                        <DropdownMenu.Item shortcut="" color="red">
                            Logout
                        </DropdownMenu.Item>
                    </AlertDialog.Trigger>

                </DropdownMenu.Content>
            </DropdownMenu.Root>
            <AlertDialog.Content style={{ maxWidth: 450 }}>
                <AlertDialog.Title>Revoke access</AlertDialog.Title>
                <AlertDialog.Description size="2">
                    Are you sure? This application will no longer be accessible and any
                    existing sessions will be expired.
                </AlertDialog.Description>

                <Flex gap="3" mt="4" justify="end">
                    <AlertDialog.Cancel>
                        <Button variant="soft" color="gray">
                            Cancel
                        </Button>
                    </AlertDialog.Cancel>
                    <AlertDialog.Action>
                        <Button variant="solid" color="red">
                            Revoke access
                        </Button>
                    </AlertDialog.Action>
                </Flex>
            </AlertDialog.Content>
        </AlertDialog.Root>
    )
}

export default DashBoardDropdown