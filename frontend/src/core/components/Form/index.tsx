import axios, { AxiosRequestConfig } from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { BASE_URL } from '../utils/request';
import './styles.css'

function Form() {

    const [ip, setIp] = useState('');
    const [mac, setMac] = useState('');
    const [port, setPort] = useState('');
    const [mask, setMask] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        const ip = (event.target as any).ip.value;
        const mac = (event.target as any).mac.value;
        const port = (event.target as any).port.value;
        const mask = (event.target as any).mask.value;

        const config: AxiosRequestConfig = {
            baseURL: BASE_URL,
            url: '/wolstart',
            method: 'POST',
            data: {
                ip, mac, port, mask
            }
        };

        axios(config)
            .then((response) => {
                handleClearInputs();
                toast.success('Wake on LAN pacote enviado!');
            })
            .catch((e) => {
                toast.error("Erro ao enviar pacote");
            });
    };

    const handleClearInputs = () => {
        setIp('');
        setMac('');
        setPort('');
        setMask('');
    };

    return (
        <div className="container">
            <form className="form-control" onSubmit={handleSubmit}>
                <div className="title-form">
                    Wake On Lan pela Internet
                </div>
                <hr />
                <div className="form-inputs">
                    <div className="input-form">
                        <input
                            type="text"
                            id='ip'
                            value={ip}
                            onChange={ip => setIp(ip.target.value)}
                            placeholder='* Endereço web ou IP, ex: 192.168.25.15'
                            autoComplete="off"
                            required={true}
                        />
                    </div>
                    <div className="input-form">
                        <input
                            type="text"
                            id='mac'
                            value={mac}
                            onChange={mac => setMac(mac.target.value)}
                            placeholder='* MAC, ex: 12-A0-B2-C1-D8-EE'
                            autoComplete="off"
                            required={true}
                        />
                    </div>
                    <div className="input-form">
                        <input
                            type="text"
                            id='port'
                            value={port}
                            onChange={port => setPort(port.target.value)}
                            placeholder='* Porta, ex: 9'
                            autoComplete="off"
                            required={true}
                        />
                    </div>
                    <div className="input-form">
                        <input
                            type="text"
                            id='mask'
                            value={mask}
                            onChange={mask => setMask(mask.target.value)}
                            placeholder='Máscara, ex: 255.255.255.0'
                            autoComplete="off"
                        />
                    </div>
                </div>
                <div className='button-form'>
                    <button type='submit'>Acionar</button>
                </div>
                <div className='button-form'>
                    <button
                        type='button'
                        onClick={handleClearInputs}
                    >
                        Limpar campos
                    </button>
                </div>
            </form>
            <div className='warnings'>
                <p>* Campos obrigatórios</p>
                <p>O envio do pacote não garante o acionamento do computador</p>
            </div>

        </div>
    );
}

export default Form;
