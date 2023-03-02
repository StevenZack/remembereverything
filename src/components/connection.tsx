import { useState } from "react";
import { ListGroup, Button, Collapse, Stack, Accordion } from "react-bootstrap";

export class Connection {
  trigger: string = '';
  reaction: string = '';
}

export default function ConnectionView(props: { i: number, v: Connection, onDelete: () => void }) {

  const [show, setShow] = useState(false);
  return <ListGroup.Item>
    <Stack direction="horizontal" >
      {props.i+1}. {props.v.trigger}
      <div className="ms-auto"></div>
      <Button variant='secondary' onClick={() => setShow(!show)}>COLLAPSE</Button>
      <Button variant='light' onClick={props.onDelete}>DELETE</Button>
    </Stack>
    <Collapse in={show}>
      <div>
        {props.v.reaction}
      </div>
    </Collapse>
    
  </ListGroup.Item>;
}