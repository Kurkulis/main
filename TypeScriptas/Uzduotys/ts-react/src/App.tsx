
import './App.css'

function App() {

  // pirmoji uzduotis

  const name: string = 'john';
  const amzius: number = 95;
  console.log(name, amzius);

  // antroji uzduotis

  let kazkas = 'monkey';
  let darKazkas = 123;
  console.log(typeof kazkas);
  console.log(typeof darKazkas);

  // trecioji uzduotis
  let tekstas = "123";
  console.log(typeof tekstas)
  let skaicioks = parseInt(tekstas);
  console.log(typeof skaicioks)

  // ketvirtoji uzduotis

  let masyvas: any[] = [123, 321, 526, 452]
  console.log(masyvas)
  masyvas.push(123)
  console.log(masyvas)
  masyvas.pop()
  console.log(masyvas)

  return (
    <>

    </>
  )
}

export default App
