import { Connection } from '@/components/connection';
import { Inter } from 'next/font/google'
import { useState } from 'react'
import { Button, Container, Navbar, Modal, Form, ListGroup, Collapse, Accordion, Stack } from 'react-bootstrap'


export default function Home() {
  var defaultData: Array<Connection> = [];
  if (typeof localStorage == 'object') {
    var str = localStorage.getItem('data');
    if (str) {
      try {
        var arr: Array<Connection> = JSON.parse(str);
        defaultData = arr;
      } catch (e) { }
    }
  }
  const [data, setData] = useState<Array<Connection>>(defaultData);
  const saveLocalData = function () {
    if (typeof localStorage == 'object')
      localStorage.setItem('data', JSON.stringify(data));
  }

  const [currentIndex, setCurrentIndex] = useState(-1);
  const [showAdd, setShowAdd] = useState(false);
  const [trigger, setTrigger] = useState('');
  const [reaction, setReaction] = useState('');
  const handleSave = function () {
    if (currentIndex > -1) {
      data[currentIndex] = {
        trigger: trigger,
        reaction: reaction,
      };
      setCurrentIndex(-1);
    } else {
      data.push({
        trigger: trigger,
        reaction: reaction,
      });
    }
    setData([...data]);
    setShowAdd(false);
    setTrigger('');
    setReaction('');
    saveLocalData();
  }
  const deleteConnection = function (index: number) {
    setData(data.filter((v, i) => i != index))
    saveLocalData();
  }
  const editConnection = function (index: number) {
    setCurrentIndex(index);
    console.log(currentIndex);

    const v = data[index];
    setTrigger(v.trigger);
    setReaction(v.reaction);
    setShowAdd(true);
  }

  const items = data.map((v, i) => <Accordion.Item eventKey={i.toString()}>
    <Accordion.Header>
      <Stack direction="horizontal" style={{ width: '100%' }} >
        <small style={{ color: 'grey', marginRight: 16 }}>{i + 1}.</small>
        <b >{v.trigger}</b>
        <div className="ms-auto"></div>
        <Button size='sm' variant='secondary' onClick={() => editConnection(i)}>Edit</Button>
        <Button size='sm' variant='danger' onClick={() => deleteConnection(i)}>Delete</Button>
      </Stack>
    </Accordion.Header>
    <Accordion.Body>
      <pre>
        {v.reaction}
      </pre>
    </Accordion.Body>
  </Accordion.Item>);
  return (
    <div>

      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Remember Everything</Navbar.Brand>
          <Button onClick={() => setShowAdd(true)}>Add</Button>
        </Container>

        <Modal show={showAdd} onHide={() => setShowAdd(false)}>
          <Modal.Header closeButton>
            <Modal.Title>ADD NEW CONNECTION</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Trigger:</Form.Label>
              <Form.Control type="text" placeholder="Enter a memory trigger" value={trigger} onChange={(e) => setTrigger(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Reaction:</Form.Label>
              <Form.Control as="textarea" placeholder="Enter a memory reaction" value={reaction} style={{ height: '200px' }} onChange={(e) => setReaction(e.target.value)} />
            </Form.Group>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowAdd(false)}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSave}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </Navbar>

      {data.length > 0 ?

        <Accordion >
          {items}
        </Accordion>
        : <center style={{marginTop:80}}>
          <span style={{ color: 'grey' }}>Empty Here</span>
        </center>
      }
    </div>
  )
}
