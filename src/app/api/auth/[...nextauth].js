import NextAuth from 'next-auth';
import  CredentialsProvider from 'next-auth/providers/credentials';
export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "username", type: "text"},
                password: { label: "Password", type: "password"}
            },
            async authorize(credentials, req) {
                // Add logic here to look up the user from the credentials supplied
                const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }
                if (user) {
                return user
                } else {

                        return null
                }
            }
        })  
    ]
}

export default NextAuth(authOptions);