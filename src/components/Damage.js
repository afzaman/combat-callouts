
function Damage(props) {

    const {
        type: {name, src},
        handleClick
    } = props

  return (

    <div className="card">
        <img src={src} alt={name} />
        <div>{name}</div>
        <button onClick={handleClick.bind(this, name, "hit")}>Hit</button>
        <button onClick={handleClick.bind(this, name, "miss")}>Miss</button>
    </div>

  );
}

export default Damage;
