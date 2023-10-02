import TicketCard from '../components/TicketCard'
import img from '../images/chris.jpg'

const Dashboard = () => {

    const tickets = [
        {
            category: 'Q1 2023',
            color: 'red',
            title: 'NFT Safety 101 Video',
            owner: 'Chris Luna',
            avatar: `${img}`,
            status: 'done',
            priority: 5,
            progress: 40,
            description: 'Make a video showcasing how to work with NFTs safely, including how to know if on eis not genuine.',
            timestamp: '2023-09-11T07:36:17+0000'
        },
        {
            category: 'Q1 2023',
            color: 'red',
            title: 'Build and Sell AI model',
            owner: 'Chris Luna',
            avatar: `${img}`,
            status: 'working on it',
            priority: 4,
            progress: 70,
            description: 'Make a video about AI.',
            timestamp: '2023-09-13T07:36:17+0000'
        },
        {
            category: 'Q2 2023',
            color: 'blue',
            title: 'Build a bot',
            owner: 'Chris Luna',
            avatar: `${img}`,
            status: 'working on it',
            priority: 3,
            progress: 10,
            description: 'Make a video about making a bot.',
            timestamp: '2023-09-15T07:36:17+0000'
        }
    ]

    const colors = [
        'rgb(255,179,186)',
        'rgb(255,223,186)',
        'rgb(255,255,186)',
        'rgb(186,255,201)',
        'rgb(186,255,255)'
    ]

    const uniqueCategories = [
        ...new Set(tickets?.map(({ category }) => category))
    ]

    console.log(uniqueCategories)

    return (
        <div className="dashboard">
            <h1>My Projects</h1>
            <div className="ticket-container">
                {tickets && uniqueCategories?.map((uniqueCategory, categoryIndex) => (
                    <div key={categoryIndex}>
                        <h3>{uniqueCategory}</h3>
                        {tickets.filter(ticket => ticket.category === uniqueCategory)
                            .map((filteredTicket, _index) => (
                                <TicketCard
                                    id={_index}
                                    color={colors[categoryIndex] || colors[0]}
                                    ticket={filteredTicket}
                                />
                            ))
                        }
                    </div>
                ))}

            </div>
        
        </div>
    )
}

export default Dashboard