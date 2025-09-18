const btns = [
  'Red',
  'Yellow',
  'Black',
  'Purple',
  'Green',
  'Blue',
  'Default'
]

const BackgroundChanger = () => {
  return (
    <div id="button-container">
      {btns.map((btn) => {
        return <button onClick={() => {
          if (btn === 'Default') document.body.style.backgroundColor = 'orange';
          document.body.style.backgroundColor = btn
        }}>{btn}</button>
      })}
    </div>
  )
}

export default function App() {
  return <>
    <BackgroundChanger />
  </>
}