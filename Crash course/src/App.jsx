const Hello = (props) => {
  const now = new Date()
  console.log(props)
  console.log(now)
  return (
    <div>
      <h1>Hello {props.name}, you are {props.age}</h1>
      <p>Today is {now.toDateString()}</p>
    </div>
  )
}

const Footer = (maker) => {
  return(
    <div>
      <p>Footer, crash course made by {maker.student}</p>
    </div>
  )
}

const App = () => {

  const name = "Sebastian"
  const student = "Sebastian, student informatyki DX"
  const age = 21
  const a = 60
  const b = 7
  return (
    <div>
      <Hello name = {name} age = {age} />
      <Hello name = "Kolega Mariusz" age = {a + b}/>
      <Footer student = {student} />
    </div>
  )
}

export default App