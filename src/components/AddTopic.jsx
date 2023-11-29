import React, { useRef, useState } from 'react'
import { Lightbulb } from 'lucide-react'
import {
    TextField,
    Button,
    Dialog,
    Flex,
    Text,
    Heading,
    Select,
    TextArea

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
                        <Button size="2" variant="solid" className='w-full disabled:bg-lime-200' style={{ cursor: 'pointer' }} ref={modalTriggerRef} disabled={search.length === 0 ? true : false}>
                            Start Learning
                        </Button>


                    </Dialog.Trigger>
                    <Dialog.Content style={{ maxWidth: 450 }}>
                        <Flex direction="column" gap="3">
                            <Heading>{search}</Heading>
                            <label>
                                <Text as="div" size="2" mb="1" weight="bold">
                                    Details related to the subject
                                </Text>
                                <TextArea placeholder="e.g: deployment in web devlopment" />
                            </label>
                            <label>
                                <Text as="div" size="2" mb="1" weight="bold">
                                    what's your level of expertise in the subject
                                </Text>
                                <Select.Root defaultValue="AbsoluteBeginner" >
                                    <Select.Trigger className="w-full" />
                                    <Select.Content>
                                        <Select.Group>
                                            <Select.Label>Level</Select.Label>
                                            <Select.Item value="AbsoluteBeginner">Absolute Beginner</Select.Item>
                                            <Select.Item value="Beginner">Beginner</Select.Item>
                                            <Select.Item value="Intermidiate">Intermidiate</Select.Item>
                                            <Select.Item value="Experts">Experts</Select.Item>
                                        </Select.Group>
                                    </Select.Content>
                                </Select.Root>
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