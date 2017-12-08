'use strict'

const apiToken = "8ebb1f613ef16489a5953dd2735ca68117223788"

export async function lambdaFunction(event, context, callback) {

  const body = JSON.parse(event.body as string) 
  console.log(body.name)
  callback(null, formatReponse(200, "Form send with success"))    
}

export function formatReponse(statusCode: Number, body: Object | string, isBase64Encoded?: boolean, headers?: JSON): JSON {
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*", // Required for CORS support to work
    "Access-Control-Allow-Credentials": true, // Required for cookies, authorization headers with HTTPS
    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization",
    "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT"
  }
  /* important: API Gateway expects lambda function to always send a response format like the one below*/
  return JSON.parse(JSON.stringify({
    'statusCode': statusCode,
    'body': JSON.stringify(body),
    'isBase64Encoded': isBase64Encoded || false,
    "headers": corsHeaders
  }))
}