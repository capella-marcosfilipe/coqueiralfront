import { CgProfile } from "react-icons/cg";
import { FaUser, /*FaShoppingBag*/ } from "react-icons/fa";
//import { IoMdSettings } from "react-icons/io";
import { IoExitOutline } from "react-icons/io5";
import Select from 'react-select';
import { IoIosArrowDroprightCircle, IoIosArrowDropleftCircle } from "react-icons/io";
//import { Link } from "react-router-dom";
import Modal1 from "./Modal1";
import LogoutModal from './LogoutModal';
import { useState, useEffect } from "react";
import "./Settings.css";

const options = [
  { value: 'male', label: 'Masculino' },
  { value: 'female', label: 'Feminino' },
  { value: 'non-binary', label: 'Não binário' },
  { value: 'other', label: 'Outro' }
];

const Settings = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState(null);
  const [cep, setCep] = useState("");
  const [number, setNumber] = useState("");
  const [bairro, setBairro] = useState("");
  const [streetName, setStreetName] = useState("");
  const [complemento, setComplemento] = useState("");
  const [uf, setUf] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [openLogoutModal, setOpenLogoutModal] = useState(false);

  // Recupera o nome do usuário do localStorage
  const [userNome, setUserNome] = useState("");

  useEffect(() => {
    const nomeSalvo = localStorage.getItem("nomeUsuario");
    if (nomeSalvo) {
      setUserNome(nomeSalvo);
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      name,
      username,
      birthDate,
      lastName,
      email,
      gender,
      address: {
        cep,
        number,
        bairro,
        streetName,
        complemento,
        uf
      }
    };
    // Adicionar o código para enviar os dados pro back aqui
    console.log(formData);
  };

  const handleLogoutConfirm = () => {
    setOpenLogoutModal(false);
    // Adicionar o código de logout aqui
    console.log('Usuário deslogado');
  };

  return (
    <section className="settingsSection">
      <input type="checkbox" className="inputToggleSettings"></input>
      <div className="toggleRightSettings">
        <IoIosArrowDroprightCircle className="dropRightSettings" />
      </div>
      <div className="toggleLeftSettings">
        <IoIosArrowDropleftCircle className="dropLeftSettings" />
      </div>
      <div className="containers1Settings">
        <div className="profilesSettings">
          <div className="profileIconsSettings">
            <CgProfile />
          </div>
          <div className="profileInfosSettings">
            <h3>{userNome || "Usuário"}</h3>
          </div>
        </div>
        <div className="container1-iconsSettings">
          <div className="iconsSettings">
            <FaUser />
            <p>Meu Perfil</p>
          </div>
          <div className="iconsSettings" onClick={() => setOpenLogoutModal(true)}>
            <IoExitOutline />
            <p>Sair da Conta</p>
          </div>
        </div>
      </div>

      <div className="containers2Settings">
        <form action="" className="formGroupsSettings" id="formgroupSettings" onSubmit={handleSubmit}>
          <h1>INFORMAÇÕES DE PERFIL</h1>
          <div className="personalInfosSettings">
            <div className="profileInfosASettings">
              <label htmlFor="name" className="labelSettings">Nome</label>
              <input type="text" name="name" id="nameSettings" className="inputSettings" autoComplete="given-name" onChange={(e) => setName(e.target.value)} required />
              <label htmlFor="username" className="labelSettings">Usuário</label>
              <input type="text" name="username" id="usernameSettings" className="inputSettings" autoComplete="username" onChange={(e) => setUsername(e.target.value)} required />
              <label htmlFor="birthDate" className="labelSettings">Data de Nascimento</label>
              <input type="date" id="birthDateSettings" name="birthDate" className="inputSettings" autoComplete="bday" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} />
            </div>
            <div className="profileInfosBSettings">
              <label htmlFor="lastName" className="labelSettings">Sobrenome</label>
              <input type="text" name="sobrenome" id="lastNameSettings" className="inputSettings" autoComplete="family-name" onChange={(e) => setLastName(e.target.value)} />
              <label htmlFor="email" className="labelSettings">Email</label>
              <input type="email" name="email" id="emailSettings" className="inputSettings" autoComplete="email" onChange={(e) => setEmail(e.target.value)} required />
              <p id="verifyEmail">Verificar email</p>
              <Select options={options} classNamePrefix="custom-selectSettings" onChange={(option) => setGender(option.value)} />
            </div>
          </div>
          <h1>ENDEREÇO</h1>
          <div className="adressInfosSettings">
            <div className="adressInfosASettings">
              <label htmlFor="CEP" className="labelSettings">CEP</label>
              <input type="text" name="CEP" id="CEPSettings" className="inputSettings" autoComplete="postal-code" onChange={(e) => setCep(e.target.value)} />
              <label htmlFor="number" className="labelSettings">Número</label>
              <input type="number" name="number" id="numberSettings" className="inputSettings" autoComplete="address-line2" onChange={(e) => setNumber(e.target.value)} />
              <label htmlFor="bairro" className="labelSettings">Bairro</label>
              <input type="text" name="bairro" id="bairroSettings" className="inputSettings" autoComplete="address-level2" onChange={(e) => setBairro(e.target.value)} />
            </div>
            <div className="adressInfosBSettings">
              <label htmlFor="streetname" className="labelSettings">Nome da Rua</label>
              <input type="text" name="streetname" id="streetnameSettings" className="inputSettings" autoComplete="address-line1" onChange={(e) => setStreetName(e.target.value)} />
              <label htmlFor="complemento" className="labelSettings">Complemento</label>
              <input type="text" id="complementoSettings" className="inputSettings" autoComplete="address-line3" onChange={(e) => setComplemento(e.target.value)} />
              <label htmlFor="UF" className="labelSettings">UF</label>
              <input type="text" name="UF" id="UFSettings" className="inputSettings" autoComplete="address-level1" onChange={(e) => setUf(e.target.value)} />
            </div>
          </div>
          <div>
            <button type="submit" className="formBtnSettings">Salvar</button>
          </div>
          <div className="deleteAccountSettings">
            <button className="deleteBtnSettings" onClick={() => setOpenModal(true)}>
              Apagar conta
            </button>
          </div>
          <div>
            <Modal1 isOpen={openModal} onClose={() => setOpenModal(false)} />
            <LogoutModal 
              isOpen={openLogoutModal} 
              onClose={() => setOpenLogoutModal(false)} 
              onConfirm={handleLogoutConfirm} 
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Settings;
