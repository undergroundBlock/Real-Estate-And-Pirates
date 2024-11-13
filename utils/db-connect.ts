

// const ConnectionString = () => {
//     const {MONGODB_DBNAME, MONGODB_USERNAME, MONGODB_PASSWORD} = process.env;
//     if (!MONGODB_DBNAME || !MONGODB_USERNAME || !MONGODB_PASSWORD) {
//         throw new Error('Missing environment variables');
//     } 
//     const uri = `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@cluster0.5x7hv.mongodb.net/?retryWrites=true&w=majority&appName=${MONGODB_DBNAME}`;
//     // mongodb+srv://<db_username>:<db_password>@cluster0.5x7hv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0


//     return uri;
// }

// export default ConnectionString;