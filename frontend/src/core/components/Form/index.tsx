import './styles.css'

function Form() {
    return (
        <div className="container">
            <form action="" className="form-control">
                <div className="title-form">
                    Wake On Lan pela Internet
                </div>
                <hr />
                <div className="form-inputs">
                    <div className="input-form">
                        <input type="text" placeholder='Digite aqui o ip ou endereço' />
                    </div>
                    <div className="input-form">
                        <input type="text" placeholder='Digite aqui o endereço mac' />
                    </div>
                    <div className="input-form">
                        <input type="text" placeholder='Digite aqui a porta' />
                    </div>
                    <div className="input-form">
                        <input type="text" placeholder='Digite aqui a máscara de subrede' />
                    </div>
                </div>
                <div className='button-form'>
                    <button type='submit'>Acionar</button>
                </div>
                <div className='button-form'>
                    <button type='button'>Limpar campos</button>
                </div>
            </form>
        </div>
    );
}

export default Form;
