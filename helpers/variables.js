// leon+api@plusqa.com / upmid: 8886c1f8-7575-451f-9b9e-d33a046cdb4a
export const vars = {
    bearerToken: "eyJhbGciOiJSUzI1NiIsImtpZCI6IjVmZjg5OTAyLTdkZDYtNGVhNC1hMmY3LTVjZTI4OTU1M2NlZnNpZyJ9.eyJpYXQiOjE3Mjg2MDE3NjcsImV4cCI6MTcyODYwNTM2NywiaXNzIjoib2F1dGgyYWNjIiwianRpIjoiMzkxOGI0NjAtNTI5My00NzU2LTkzYjgtN2U1MTIzYTA2NzE0IiwiYXVkIjoiY29tLm5pa2UuZGlnaXRhbCIsInNidCI6Im5pa2U6YXBwIiwidHJ1c3QiOjEwMCwibGF0IjoxNzI3Mzc5NzE2LCJzY3AiOlsibmlrZS5kaWdpdGFsIl0sInN1YiI6ImIyYTQ2ZGQxY2ZmYWI1OTM0MjU1YzZjMDI3NDdkOTQ0IiwicHJuIjoiODg4NmMxZjgtNzU3NS00NTFmLTliOWUtZDMzYTA0NmNkYjRhIiwicHJ0IjoibmlrZTpwbHVzIiwibHJzY3AiOiJuaWtlLmRpZ2l0YWwgb3BlbmlkIHByb2ZpbGUgZW1haWwgcGhvbmUgZmxvdyJ9.LgLnOSTgzA8tkO2Atckh5w35XtQ90v7icr2powMnHX_gbEq5WwBifde2x8WszL2yrafVP1osAmXC9NDG-OLqjJVtI-YLpF4OgCpF_RW57mQ0kjdzrD0kNIXROVKGwfX705Vacvp6uWYmLoFiB6KyLocssCldHFD4oBOzJGLtT7dRJTo2LsbRFcQLgMTW3Kvl9zu5RcZt5LH77dQLNzv7WdiLWTy3JychCQcZ6gqK6Zz6tvP-VX15Og30kgJX98K-zTBNjIa9f8zEcNfXO-P2i7UYm1h1c3GbzpdyybFcmoqPH0hVVB4EF64FaNOQW7_2QPqCWIooN9_4gBv91OKZ1w",
    adminBearerToken: "eyJraWQiOiJqN3kxVWlfV0tqWjVoZS1tRXd6R3hBZ0FrQkxrUm5JaWFWak9CRU5qeDdnIiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULjJGX3JRalM0LVZ0QWxPY1FneXZJSEVuVndNNURNdFMySTgxNEVQX1pkV0EiLCJpc3MiOiJodHRwczovL25pa2UtcWEub2t0YXByZXZpZXcuY29tL29hdXRoMi9hdXNhMG1jb3JucFpMaTBDNDBoNyIsImF1ZCI6Imh0dHBzOi8vbmlrZS1xYS5va3RhcHJldmlldy5jb20iLCJpYXQiOjE3Mjc5OTA0MzksImV4cCI6MTcyNzk5NDAzOSwiY2lkIjoibmlrZS52YWxpYW50bGFicy5jb25zb2xlIiwidWlkIjoiMDB1MjA0aDdocDA0OEpKYU8waDgiLCJzY3AiOlsicHJvZmlsZSIsIm9wZW5pZCIsImVtYWlsIl0sImF1dGhfdGltZSI6MTcyNzk4NzIxNiwic3ViIjoiTGVvbmlkYXMuWmFnb3JvdWlrb0BuaWtlLmNvbSJ9.gT5K2bcG4gCsqstnQLuKLDLcLLh0SiO9wdj-g5ghW7I_5p5aJOBm6mHZmrz7Fxe-rzsU_51sEz5GqKzWBF-EMjORQnuds3KVA2zZjXdMqjiAomrDEYgeZtC-IgfqNfQua8tsW3yq9tdYgQQXftwWpcjqq5lgBd6oXlmapRKthvBUMAQeLSN5a09ZzL81loNFmf7lcDmjPlTKujovF0sdZi-GRMLMoal0WpU4e69NyFsF2cDASjxowXuXxETeesc2pEBZ65niq-RbIJWa669mohaXAEBfje80mgklKwCIsAO-Ol2ceG_Q0yhFAtz23KwckbovLtAAh2mu9tdCCVM4QQ",
    upmId: "8886c1f8-7575-451f-9b9e-d33a046cdb4a",
    athleteId: "6103cfff-4490-5402-ac90-f4e2ea2d5365",
    // initiativeHandle: "a-new-exp",
    initiativeHandle: "a",
    initiativeConsentHandle: "a-new-exp-consent-document-2",
    inquiryHandle: "test123"
}

export const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': `Bearer ${vars.bearerToken}`,
}

export const adminHeaders = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': `Bearer ${vars.adminBearerToken}`,
}