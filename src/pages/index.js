const Home = () => {
    return <div / >
}

export const getServerSideProps = async() => {
    return {
        redirect: {
            permanent: true,
            destination: '/home-landing-2',
        }
    }
}

export default Home;