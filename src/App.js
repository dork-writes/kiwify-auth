import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  const location = useLocation();
  const [loc, setLoc] = useState('/');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [eerr, changeEerr] = useState('');
  const [perr, changePerr] = useState('');
  const [p, setP] = useState(0);
  const [em, setE] = useState(0);
  const [repEmail, setRepemail] = useState('');
  const [re, setRE] = useState(0);
  const [rerr, changeRerr] = useState('');
  const [match, setMatch] = useState('');
  const [checked, setChecked] = useState(false);
  const [cerr, setCerr] = useState('');

  useEffect(()=>
  {
    if (location.pathname !== loc)
    {
      setEmail('');
      setPassword('');
      changeEerr('');
      changePerr('');
      setP(1);
      setE(1);
      setRepemail('');
      setRE(0);
      changeRerr('');
      setMatch('');
      setChecked(false);
      setCerr('');
      setLoc(location.pathname)
    }
    document.title = location.pathname === '/kiwify-auth' || location.pathname === "/kiwify-auth/" ? 'Login' : 'Cadastro';
  }, [location, loc])

  const handleSubmit = (e) =>
  {
    e.preventDefault();

    if (email === '')
    {
        changeEerr('Esse campo é obrigatório');
    }

    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email))
    {
        changeEerr('O e-mail deve ser válido');
    }

    if (password === '')
    {
        changePerr('Esse campo é obrigatório');
    }

    if (repEmail === '')
    {
        setMatch('Os dois e-mails devem ser iguais.');
        changeRerr('Esse campo é obrigatório');
    }

    if (email !== repEmail)
    {
        setMatch('Os dois e-mails devem ser iguais.');
    }

    if (!checked)
    {
      setCerr('(Esse campo é obrigatório)');
    }

  }

  const changeEmail = (e) =>
  {
    setEmail(e.currentTarget.value);
    if (em !== 0)
    {
        if (e.currentTarget.value === "")
        {
            changeEerr('Esse campo é obrigatório');
        }
        
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.currentTarget.value))
        {
            changeEerr('O e-mail deve ser válido');
        }
        
        else
        {
            changeEerr('');
        }
    }
}

const changeRepemail = (e) =>
{
  setRepemail(e.currentTarget.value);
  if (re !== 0)
  {
    if (repEmail === '')
    {
        changeRerr('Esse campo é obrigatório');
        setMatch('Os dois e-mails devem ser iguais.');
    }

    if (email !== repEmail)
    {
        setMatch('Os dois e-mails devem ser iguais.');
    }
    
    if (repEmail !== '')
    {
      changeRerr('');
    }

    if (email === repEmail && repEmail !== '')
    {
      setMatch('');
    }
  }
}

const changeChecked = (e) =>
{
  if (checked)
  {
    setCerr('(Esse campo é obrigatório)');
  }

  else
  {
    setCerr('');
  }

  setChecked(!checked);
}

const changePassword = (e) =>
{
    setPassword(e.currentTarget.value);
    if (p !== 0)
    {
        if (e.currentTarget.value === "")
        {
            changePerr('Esse campo é obrigatório');
        }
    
        else
        {
            changePerr('');
        }
    }
  }

  return (
  <>
      <Routes>
        <Route path = "/kiwify-auth" element = {<Login email = {email} setEmail = {setEmail} password = {password} setPassword = {setPassword} eerr = {eerr} perr = {perr} changeEerr = {changeEerr} changePerr = {changePerr} p = {p} em = {em} setP = {setP} setE = {setE} handleSubmit = {handleSubmit} changeEmail = {changeEmail} changePassword = {changePassword}/>} />
        <Route path = "/kiwify-auth/signup" element = {<Signup email = {email} setEmail = {setEmail} password = {password} setPassword = {setPassword} eerr = {eerr} perr = {perr} changeEerr = {changeEerr} changePerr = {changePerr} p = {p} em = {em} setP = {setP} setE = {setE} handleSubmit = {handleSubmit} changeEmail = {changeEmail} changePassword = {changePassword} changeRepemail = {changeRepemail} changeRerr = {changeRerr} setMatch = {setMatch} setRE = {setRE} rerr = {rerr} match= {match} cerr = {cerr} setCerr = {setCerr} checked = {setChecked} changeChecked = {changeChecked}/>} />
      </Routes>
  </>
  );
}

export default App;
