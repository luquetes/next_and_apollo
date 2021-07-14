import { gql } from "@apollo/client";
import client from "../apollo-client";

const CountriesStatic = props => {
    return (
        <>
        <h1>Countries con getStaticProps</h1>
        <ul>
            {props.countries.map(country => {
                return (
                    <div id={country.code} key={country.code}>
                        <h3>{country.name} - {country.emoji}</h3>
                    </div>
                )
            })}
        </ul>
        </>
    )
}

export async function getStaticProps() {
    const {data} = await client.query({
        query: gql`
            query Countries {
                countries {
                    code
                    name
                    emoji
                }
            }
        `
    })

    return {
        props: {
            countries: data.countries.slice(0,4)
        },
        revalidate: 3600
    }
}

export default CountriesStatic;