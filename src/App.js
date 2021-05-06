import './App.css'; 
import { NavBar } from './components/navBar/navBar';
import { List } from './components/list/list';
import { ItemCount } from './components/itemCount/itemCount';

function App() {
 const boxes = [{"id": 1,"nombre": "DeliBox","precio": 3650,"contenido": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.","img": "images1/delimeats1.jpeg","cantidad": 1}, 
                  {"id": 2,"nombre": "ParriBox","precio": 3500,"contenido": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.","img": "images1/parriboxvino1.jpeg","cantidad": 1},
                  {"id": 3,"nombre": "WineBox","precio": 3300,"contenido": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.","img": "images1/winebox1.jpeg","cantidad": 1},
                  {"id": 4,"nombre": "WakeBox","precio": 3200,"contenido": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.","img": "images1/wakeupbox.jpeg","cantidad": 1},
                  {"id": 5,"nombre": "BeerBox","precio": 2150,"contenido": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.","img": "images1/beerbox.jpeg","cantidad": 1},
                  {"id": 6,"nombre": "AperolBox","precio": 3100,"contenido": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.","img": "images1/aperolbox.jpeg","cantidad": 1},
                  {"id": 7,"nombre": "GinBox","precio": 3000,"contenido": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.","img": "images1/ginbox2.jpeg","cantidad": 1},
                  {"id": 8,"nombre": "MemoriesBox","precio": 2300,"contenido": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.","img": "images1/memoriesbox.jpeg","cantidad": 1},
                  {"id": 9,"nombre": "TeaBox","precio": 2900,"contenido": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.","img": "images1/teatimebox.jpeg","cantidad": 1},
                  {"id": 10,"nombre": "ProvoBox","precio": 2400,"contenido": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.","img": "images1/provo2.jpeg","cantidad": 1},
                  {"id": 11,"nombre": "MovieBox","precio": 2800,"contenido": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.","img": "images1/movie2.jpeg","cantidad": 1}]

  return (
    <div>
      <NavBar />
      <List product ={boxes} />
      <ItemCount List= {boxes.cantidad}/>

    </div>


      
  );
}

export default App;
