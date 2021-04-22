import pbkdf2 from "pbkdf2"

export default function passwordHasher(password){
    const derivedKey = pbkdf2.pbkdf2(password, '5C2jT282.bcYTmNW', 1, 32, 'sha512', (err, derivedKey) => {
        if (err) throw err;

        return derivedKey.toString('hex');
    })
    
}