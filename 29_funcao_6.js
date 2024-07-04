create_string_connection("db_products", "felipe", "9876")

function create_string_connection(database_name, user, pass){
    console.log(`connect:DBCONNECT;user=${user};pass=${pass};initial_database=${database_name} ` )
}