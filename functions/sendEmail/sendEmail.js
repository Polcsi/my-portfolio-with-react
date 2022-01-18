const nodemailer = require("nodemailer");
const { google } = require("googleapis");

const CLIENT_ID =
  "76430296082-bvh9sk02q09r32g59osmvi4cli7feek9.apps.googleusercontent.com";
const CLIENT_SECRET = "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";
const REDIRECT_URI =
  "https://developers.google.com/oauthplayground/#step2&scopes=https%3A%2F%2Fmail.google.com%2F&auth_code=4%2F0AX4XfWjY1vgSPAxk7TINeYEM-AYX-PyRzHmBhKdyTalJdyYcP3hQPrEalpOXKBJTjWooLg&refresh_token=1%2F%2F04RXQY4nThcexCgYIARAAGAQSNwF-L9Ir5KGs7gMOQnSlDTOfrfBSu-81u_61vB-9F_YS7BpBKjOAGsb3S5-6VlB_7WLGnMj3Nd4&access_token_field=ya29.a0ARrdaM9jInKVwDusVhDeDvvTzKeVp9GAE8vqLrwv-pOaaAcOrZHgE4j8B-vySF1L2St0DctaeiXoE-qswSQkulyia86IKVkR0QUnAY6R4ldAxIllzrjfb-kybxcIVfIlOjfpMpLuzdBG6S9bOBIcf2KmMXj2&url=https%3A%2F%2F&content_type=application%2Fjson&http_method=GET&useDefaultOauthCred=checked&oauthEndpointSelect=Google&oauthAuthEndpointValue=https%3A%2F%2Faccounts.google.com%2Fo%2Foauth2%2Fv2%2Fauth&oauthTokenEndpointValue=https%3A%2F%2Foauth2.googleapis.com%2Ftoken&oauthClientId=76430296082-bvh9sk02q09r32g59osmvi4cli7feek9.apps.googleusercontent.com&expires_in=3598&oauthClientSecret=%20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&access_token_issue_date=1641740862&for_access_token=ya29.a0ARrdaM9jInKVwDusVhDeDvvTzKeVp9GAE8vqLrwv-pOaaAcOrZHgE4j8B-vySF1L2St0DctaeiXoE-qswSQkulyia86IKVkR0QUnAY6R4ldAxIllzrjfb-kybxcIVfIlOjfpMpLuzdBG6S9bOBIcf2KmMXj2&includeCredentials=checked&accessTokenType=bearer&autoRefreshToken=unchecked&accessType=offline&prompt=consent&response_type=code&wrapLines=on";
const REFRESH_TOKEN =
  "1//04RXQY4nThcexCgYIARAAGAQSNwF-L9Ir5KGs7gMOQnSlDTOfrfBSu-81u_61vB-9F_YS7BpBKjOAGsb3S5-6VlB_7WLGnMj3Nd4";

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

exports.handler = async function (event, context, callback) {
  const accessToken = await oAuth2Client.getAccessToken();

  let data = JSON.parse(event.body);

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      type: "OAuth2",
      user: "pollak.bence01@gmail.com",
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      refreshToken: REFRESH_TOKEN,
      accessToken: accessToken,
    },
  });

  try {
    const { firstname, lastname, email_address, town, body } = data;
    let info = await transporter.sendMail({
      from: "My Portfolio Website <pollak.bence01@gmail.com>",
      to: "pollakbence12@gmail.com",
      subject: `Email from ${email_address}...`,
      text: body,
      html: `
                <h3>Full Name: <span style="font-weight: 300;">${firstname} ${lastname}</span><br>
                Email Address: ${email_address}<br>
                Town: <span style="font-weight: 300;">${
                  town === "" ? "-" : town
                }</span></h3>
                <p style="font-size: 1.2rem;">${body}<p>
                `,
    });
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        result: "success",
      }),
    });
  } catch (error) {
    callback(error);
  }

  // verify connection configuration
  transporter.verify(function (error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });
};
