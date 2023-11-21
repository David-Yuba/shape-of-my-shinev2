import { NextResponse } from "next/server";
import { google } from "googleapis";
import path from "path";

function pars(obj:{
  "FirstName":string,
  "LastName":string,
  "DanceExperience":string,
  "PhoneNumber":string,
  "eMail":string,
  "BeginnerSalsa":boolean,
  "BeginnerBachata":boolean,
  "AdvancedSalsa":boolean,
  "AdvancedBachata":boolean
}){
  let arr=[obj.FirstName,
    obj.LastName,
    obj.DanceExperience,
    obj.PhoneNumber,
    obj.eMail,
    obj.BeginnerSalsa,
    obj.BeginnerBachata,
    obj.AdvancedSalsa,
    obj.AdvancedBachata];
return arr;}

export async function POST(request: Request){
    const data:{
      "FirstName":string,
      "LastName":string,
      "DanceExperience":string,
      "PhoneNumber":string,
      "eMail":string,
      "BeginnerSalsa":boolean,
      "BeginnerBachata":boolean,
      "AdvancedSalsa":boolean,
      "AdvancedBachata":boolean
    }|any= await request.json();

    const datapars=pars(data);
    const scopes = ["https://www.googleapis.com/auth/spreadsheets"];
    const auth=new google.auth.JWT(process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      undefined,
      // we need to replace the escaped newline characters
      // https://stackoverflow.com/questions/50299329/node-js-firebase-service-account-private-key-wont-parse
      process.env.GOOGLE_SHEETS_PRIVATE_KEY!.replace(/\\n/g, "\n"),
      scopes);
    const sheets= google.sheets({version:"v4",auth});

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SHEET_ID,
      range:"A1",
      valueInputOption:"RAW",
      insertDataOption:"INSERT_ROWS",
      requestBody: {values: [datapars]},
    });

    console.log(datapars);
    return new NextResponse(data, {
        status: 200,
      });
}

