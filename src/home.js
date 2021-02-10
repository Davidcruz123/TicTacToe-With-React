import React from 'react'

const Ventana1 = () => {
    return (
      <div>
        <h1>Tic Tac Toe in React.js</h1>
        <h1>Pick a Weapon</h1>

        <div className="contenedor1">
          <h3>CHOOSE YOUR WEAPON</h3>
          <div className="inputs mx-auto">
            <input type="text" placeholder="Player 1 username" />
            <input type="text" placeholder="Player 2 username" />
          </div>
          <div className="divSimbolos mx-auto">
              <div className="simbolosgato" >X</div>
                <div className="simbolosgato" >O</div>

        


          </div>
        </div>
      </div>
    );
}

export default Ventana1
