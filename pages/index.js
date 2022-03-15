import { useEffect, useState } from "react";

import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home({ pokemon }) {
	return (
		<div className={styles.container}>
			<Head>
				<title>Pokedex</title>
			</Head>
			<div className={styles.grid}>
				{pokemon.map((pokemon) => (
					<div className={styles.card} key={pokemon.id}>
						<Link href={`/pokemon/${pokemon.id}`}>
							<a>
								<img
									src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`}
									alt={pokemon.name}
								/>
								<h3>{pokemon.name}</h3>
							</a>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
}
export const getServerSideProps = async () => {
	const resp = await fetch(
		"https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json"
	);
	return {
		props: {
			pokemon: await resp.json(),
		},
	};
};
