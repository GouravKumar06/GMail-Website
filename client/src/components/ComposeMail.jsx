import React,{useState} from 'react';
import { Box, Dialog, InputBase, TextField, Typography, Button, styled } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import useApi from '../hooks/useApi';
import { API_URLS } from '../services/api.urls';

const dialogStyle = {
    height: '90%',
    width: "80%",
    maxWidth: "100%",
    maxHeight: '100%',
    boxShadow: 'none',
    borderRadius: '10px 10px 0 0'
}

const Header = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 10px',
    background: '#f2f6fc',
    '& > p': {
        fontSize: 14,
        fontWeight: 500
    }
})

const RecipientsWrapper = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    padding: '0 10px',
    '& > div': {
        fontSize: 15,
        borderBottom: '2px solid #F5F5F5',
        marginTop: 10

    }
})

const Footer = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 15px'

})

const SendButton = styled(Button)({
    background: '#0B57D0',
    color: '#fff',
    fontWeight: 500,
    textTransform: 'none',
    borderRadius: 18,
    width: 100
})

const ComposeMail = ({ openDialog, setOpenDialog }) => {

    const [data,setData] = useState({});
    const sentEmailService = useApi(API_URLS.saveSentEmail); 
    const saveDraftService = useApi(API_URLS.saveDraftEmails);

    const config = {
        Host: "smtp.elasticemail.com",
        Username: 'gourav1234@yopmail.com',
        Password: 'B9CC598AC97826BAFA5CD3F0170DA9F8759C ',
        Port: 2525,
    }

    const closeComposeMail = (event) => {
        event.preventDefault();
        const payload = {
            to : data.to,
            from:'gka98963@gmail.com',
            subject:data.subject,
            body:data.body,
            date: new Date(),
            image:'',
            name:"Gourav kumar",
            starred:false,
            type:'drafts'
        }

        saveDraftService.call(payload);

        if(!saveDraftService.error)
        {
            setOpenDialog(false);
            setData({})
        }
    }

    const onValueChange =(e) =>{
        setData({
            ...data,
            [e.target.name]:e.target.value,
        })
        
    }
 
    const sendMail = (e) => {
        e.preventDefault();
        if (window.Email) {
            window.Email.send({
                ...config,
                To: data.to,
                From: "gka98963@gmail.com",
                Subject: data.subject,
                Body: data.body,
            }).then(
                message => alert(message)
            );
        }

        const payload = {
            to : data.to,
            from:'gka98963@gmail.com',
            subject:data.subject,
            body:data.body,
            date: new Date(),
            image:'',
            name:"Gourav kumar",
            starred:false,
            type:'sent'
        }

        sentEmailService.call(payload);

        if(!sentEmailService.error)
        {
            setOpenDialog(false);
            setData({})
        }
        
    }

    const deleteMail = () => {
        setOpenDialog(false)
    }
    return (
        <Dialog
            open={openDialog}
            PaperProps={{ sx: dialogStyle }}
        >
            <Header>
                <Typography>New Message</Typography>
                <CloseIcon fontSize='small' onClick={(event)=>closeComposeMail(event)} />
            </Header>

            <RecipientsWrapper>
                <InputBase placeholder='Recipients' name='to' onChange={(e)=>onValueChange(e)} />
                <InputBase placeholder='Subject' name='subject' onChange={(e)=>onValueChange(e)} />
            </RecipientsWrapper>

            <TextField
                multiline
                rows={18}
                sx={{
                    '& .MuiOutlinedInput-notchedOutline': {
                        border: 'none'
                    }
                }}
                name='body'
                onChange={(e)=>onValueChange(e)}
            />

            <Footer>
                <SendButton onClick={(e) =>sendMail(e)}>Send</SendButton>
                <DeleteOutlineIcon onClick={deleteMail} />
            </Footer>
        </Dialog>
    )
}

export default ComposeMail;