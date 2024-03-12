import React from "react"

import Text from './base/Text';
import TextField from './base/TextField'
import TextArea from './base/TextArea'
import Button from './base/Button'
import Container from './Container';
import Input from './base/Input';
import Image from './base/Image';
import DropDown from './base/DropDown'


const componentMapping = {
    text: Text,
    textfield: TextField,
    textarea: TextArea,
    button: Button,
    container: Container,
    input: Input,
    image: Image,
    dropdown: DropDown,
};

const DynamicComponentRenderer = ({ view }) => {
    if (!view) { return null }

    const Component = componentMapping[view.type]

    if (!Component) { console.error('Component not defined'); return null }

    return (<Component {...view} style={view.style} data={view.data} actions={view.actions}>
        {view.children &&
            view.children.map((child, index) =>
                <DynamicComponentRenderer key={index} view={child} />
            )
        }
    </Component>
    )
}

export default DynamicComponentRenderer