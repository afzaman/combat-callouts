
function Damage(props) {

    const {
        type: {name, src},
        handleClick
    } = props

  return (

    <div>
        {name}
        <img src={src} alt="X" />
        <button onClick={handleClick.bind(this, name, "hit")}>Hit</button>
        <button onClick={handleClick.bind(this, name, "miss")}>Miss</button>
    </div>

  );
}

export default Damage;
