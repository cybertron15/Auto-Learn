import React, { useRef, useState } from 'react'
import { Lightbulb } from 'lucide-react'
import {
    TextField,
    Button,
    Dialog,
    Flex,
    Text
} from '@radix-ui/themes'
import * as Separator from '@radix-ui/react-separator';

function AddTopic({ settopics }) {
    const [bulbcolor, setbulbcolor] = useState('grey')
    const [search, setSearch] = useState('')
    const modalTriggerRef = useRef()

    const handleSave = () => {
        settopics((prev) => {
            return [...prev, search]
        })
        setSearch('')
    }

    const handleKeyDown = (event) => {
        if ((event.key === "Enter") && (search.length !== 0)) modalTriggerRef.current.click()
        setbulbcolor('#d4a720')
    }
    return (
        <div className='mx-2'>
            <TextField.Root>
                <TextField.Slot>
                    <Lightbulb color={search.length >= 5 ? '#d4a720' : bulbcolor} />
                </TextField.Slot>
                <TextField.Input
                    placeholder="What you want to learn?"
                    onChange={(event) => { setSearch(event.target.value) }} value={search}
                    onKeyDown={handleKeyDown}
                    onKeyUp={(event) => { search.length <= 5 && setbulbcolor('grey') }}
                />
            </TextField.Root>
            <div className='mt-2'>
                <Dialog.Root >
                    <Dialog.Trigger>
                        <Button size="2" variant="solid" className='w-full cursor-pointer disabled:bg-lime-200' ref={modalTriggerRef} disabled={search.length === 0 ? true : false}>
                            Start Learning
                        </Button>
                    </Dialog.Trigger>
                    <Dialog.Content style={{ maxWidth: 450 }}>
                        <Flex direction="column" gap="3">
                            <label>
                                <Text as="div" size="2" mb="1" weight="bold">
                                    Topic
                                </Text>
                                <TextField.Input
                                    defaultValue={search}
                                    readOnly
                                />
                            </label>
                            <label>
                                <Text as="div" size="2" mb="1" weight="bold">
                                   what's your level of expertise in the subject
                                </Text>
                                <TextField.Input
                                    // defaultValue="Freja Johnsen"
                                    // placeholder="Enter your full name"
                                />
                            </label>

                        </Flex>

                        <Flex gap="3" mt="4" justify="end">
                            <Dialog.Close>
                                <Button variant="soft" color="gray" ref={modalTriggerRef}>
                                    Cancel
                                </Button>
                            </Dialog.Close>
                            <Dialog.Close>
                                <Button onClick={handleSave}>Save</Button>
                            </Dialog.Close>
                        </Flex>
                    </Dialog.Content>
                </Dialog.Root>
            </div>
            <Separator.Root className="-2 mt-3 bg-slate-300" style={{ height: "1px" }} />
        </div>
    )
}

export default AddTopic