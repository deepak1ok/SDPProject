import nodemailer from 'nodemailer'

const transport=nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
          user: "saswatjyotidas.2041004168@gmail.com",
          pass: "krns gcbu pdzn enjs", // generated from the App Passwords
        },
        secure: true,
})

export const sendMail=async(email,subject,content)=>
    {
        console.log(process.env.SMTP_MAIL,process.env.SMTP_PASSWORD)
        try
        {
            let mailOptions={
                from:process.env.SMTP_MAIL,
                to:email,
                subject:subject,
                html:content
            }

            transport.sendMail(mailOptions,(error,info)=>
            {
                if(error)
                {
                    console.log(error);
                }
                else{
                    console.log('Mail Sent',info.messageId);
                }
            })
        }
        catch(error)
        {
            console.log(error);
        }
    }
