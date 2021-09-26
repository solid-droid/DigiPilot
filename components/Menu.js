import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SpeedDial } from 'react-native-elements'

const Menu = () => {
    const [open, setOpen] = React.useState(false);
    return (
    <SpeedDial
            isOpen={open}
            icon={{ name: 'edit', color: '#fff' }}
            openIcon={{ name: 'close', color: '#fff' }}
            onOpen={() => setOpen(!open)}
            onClose={() => setOpen(!open)}
            >
                <SpeedDial.Action
                    icon={{ name: 'add', color: '#fff' }}
                    title="Food"
                    onPress={() => console.log('Add Something')}
                />
                <SpeedDial.Action
                    icon={{ name: 'delete', color: '#fff' }}
                    title="Gifts"
                    onPress={() => console.log('Delete Something')}
                />
                <SpeedDial.Action
                    icon={{ name: 'delete', color: '#fff' }}
                    title="Stays"
                    onPress={() => console.log('Delete Something')}
                />
                <SpeedDial.Action
                    icon={{ name: 'delete', color: '#fff' }}
                    title="Events"
                    onPress={() => console.log('Delete Something')}
                />
        </SpeedDial>
    )
}

export default Menu

const styles = StyleSheet.create({})
