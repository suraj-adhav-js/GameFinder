import { Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";

interface Props{
    children: string;
}

const ExpandableText = ({children}: Props) => {
  const [expandable, setExpandable] = useState(false);
    const limit = 300;

    if(!children) return null;

    if(children.length <= limit) return <Text>{children}</Text>;

    const summary = expandable ? children : children.substring(0,limit)+'...';
    return <Text>{summary}<Button size={"xs"} colorScheme="yellow" fontWeight={"bold"} marginLeft={1} onClick={()=>setExpandable(!expandable)}>{expandable? 'Read Less' : 'Read More'}</Button></Text>
};

export default ExpandableText;
