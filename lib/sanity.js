import sanityClient from '@sanity/client'

export const client = sanityClient( {
    projectId: '6zmwkdso',
    dataset: 'production',
    apiVersion: '2021-03-25',
    token: 'sk3EkWAlKX5qs98sCEZ0BTldGq702qBQIDaSxo4WckCSyYKEwrwaYSl10sMW7gp7D1PXOnsUf5M2AunI0CPMfq2JvdwI0pUSm07PomRTJ5eMhLCO1Mx4qwS3n6Mudm0scBAwQYI41hf2lNzolzGsCy2TaD1n0C63AxUgJUMKUFHLnSMVOFGB',
    useCdn: false,

})