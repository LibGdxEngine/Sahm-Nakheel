import {useState, useEffect} from 'react';
import {Doughnut, Line, Bar, Pie} from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement
} from 'chart.js';
import 'tailwindcss/tailwind.css';
import NavBar from "@/pages/components/Navbar/NavBar";
import Footer from "@/pages/components/Footer";

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement
);


export default function Index() {
    const [data, setData] = useState({
        totalRevenue: 120000,
        revenueGrowth: 15,
        totalTransactions: 3000,
        avgTransactionValue: 40,
        installmentBreakdown: {
            oneTime: 2000,
            installments: 1000,
        },
        outstandingInstallments: 5000,
    });

    const [userData, setUserData] = useState({
        activeUsers: [500, 600, 700, 800, 750, 900, 950, 1000, 1100, 1150, 1200, 1250],
        newUsers: 300,
        returningUsers: 900,
        churnRate: 5,
    });

    const [transactionData, setTransactionData] = useState({
        transactionVolume: [300, 400, 450, 500, 480, 520, 550, 600, 650, 700, 750, 800],
        successRate: 90,
        failedTransactions: 50,
        paymentMethods: {
            creditCard: 1200,
            bankTransfer: 800,
        },
    });

    const [installmentData, setInstallmentData] = useState({
        planUsage: {
            planA: 500,
            planB: 300,
            planC: 200,
        },
        defaultRate: 5,
        avgDuration: 12,
        paymentSchedule: [
            { date: '2023-06-15', amount: 200 },
            { date: '2023-07-15', amount: 150 },
            // More payment schedules...
        ],
    });

    useEffect(() => {

    }, []);

    return (
        <div className="bg-mintyGreen min-h-screen pt-10">
            <NavBar/>
            <div className={`w-full px-20`}>
                <h1 className="text-3xl font-bold mb-6">Financial Dashboard</h1>

                <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow"
                         title="The total amount of money earned from sales and services.">
                        <h2 className="text-xl font-bold">Total Revenue</h2>
                        <p className="text-3xl">${data.totalRevenue}</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow"
                         title="Data on how many users opt for installment payments versus one-time payments.">
                        <h2 className="text-xl font-bold">Installment Breakdown</h2>
                        <div className={`w-96 h-fit`}>
                            <Pie data={{
                                labels: ['One-Time Payments', 'Installments'],
                                datasets: [{
                                    data: [data.installmentBreakdown.oneTime, data.installmentBreakdown.installments],
                                    backgroundColor: ['#34D399', '#60A5FA'],
                                }]
                            }}/>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow"
                         title="Month-over-month or year-over-year revenue growth.">
                        <h2 className="text-xl font-bold">Revenue Growth (Month-over-month)</h2>
                        <p className="text-3xl">{data.revenueGrowth}%</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow"
                         title="The number of successful transactions processed.">
                        <h2 className="text-xl font-bold">Total Transactions</h2>
                        <p className="text-3xl">{data.totalTransactions}</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow" title="The average amount spent per transaction.">
                        <h2 className="text-xl font-bold">Average Transaction Value</h2>
                        <p className="text-3xl">${data.avgTransactionValue}</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow"
                         title="Total amount of money currently owed through installments.">
                        <h2 className="text-xl font-bold">Outstanding Installments</h2>
                        <p className="text-3xl">${data.outstandingInstallments}</p>
                    </div>
                </div>

                {/*    User metrics   */}
                <br/>
                <br/>
                <br/>
                <br/>
                <h1 className="text-3xl font-bold mb-6">User Metrics</h1>

                <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow"
                         title="Number of active users over last month">
                        <h2 className="text-xl font-bold">Active Users</h2>
                        <p className="text-3xl">{userData.activeUsers[0]}</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow"
                         title="Number of new users who have registered and made a transaction.">
                        <h2 className="text-xl font-bold">New Users</h2>
                        <p className="text-3xl">{userData.newUsers}</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow"
                         title="Number of users who have made repeat transactions.">
                        <h2 className="text-xl font-bold">Returning Users</h2>
                        <p className="text-3xl">{userData.returningUsers}</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow"
                         title="The rate at which users stop making transactions.">
                        <h2 className="text-xl font-bold">Churn Rate</h2>
                        <p className="text-3xl">{userData.churnRate}%</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h2 className="text-xl font-bold">User Activity</h2>
                        <Line data={{
                            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                            datasets: [{
                                label: 'Active Users',
                                data: userData.activeUsers,
                                borderColor: '#34D399',
                                backgroundColor: 'rgba(52, 211, 153, 0.2)',
                            }]
                        }}/>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h2 className="text-xl font-bold">New vs Returning Users</h2>
                        <Doughnut data={{
                            labels: ['New Users', 'Returning Users'],
                            datasets: [{
                                data: [userData.newUsers, userData.returningUsers],
                                backgroundColor: ['#60A5FA', '#34D399'],
                            }]
                        }}/>
                    </div>


                </div>

                {/*    Transaction Metric*/}
                <br/>
                <br/>
                <br/>
                <br/>
                <h1 className="text-3xl font-bold mb-6">Transaction Metrics</h1>

                <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                    <div className="bg-white p-6 rounded-lg shadow"
                         title="The total number of transactions processed over time.">
                        <h2 className="text-xl font-bold">Transaction Volume</h2>
                        <Bar data={{
                            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                            datasets: [{
                                label: 'Transactions',
                                data: transactionData.transactionVolume,
                                backgroundColor: '#34D399',
                            }]
                        }}/>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow"
                         title="The percentage of successful transactions versus failed ones.">
                        <h2 className="text-xl font-bold">Success Rate</h2>
                        <p className="text-3xl">{transactionData.successRate}%</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow" title="Number and reasons for failed transactions.">
                        <h2 className="text-xl font-bold">Failed Transactions</h2>
                        <p className="text-3xl">{transactionData.failedTransactions}</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h2 className="text-xl font-bold">Payment Methods</h2>
                        <Pie data={{
                            labels: ['Cash', 'Credit Card'],
                            datasets: [{
                                data: [transactionData.paymentMethods.creditCard, transactionData.paymentMethods.bankTransfer],
                                backgroundColor: ['#60A5FA', '#34D399'],
                            }]
                        }}/>
                    </div>
                </div>

                {/* Installment Metrics */}
                <br/>
                <br/>
                <br/>
                <br/>
                <h1 className="text-3xl font-bold mb-6">Installment Metrics</h1>

                <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow"
                         title="Number of users on different installment plans.">
                        <h2 className="text-xl font-bold">Installment Plans Usage</h2>
                        <Bar data={{
                            labels: ['Plan A', 'Plan B', 'Plan C'],
                            datasets: [{
                                label: 'Users',
                                data: [installmentData.planUsage.planA, installmentData.planUsage.planB, installmentData.planUsage.planC],
                                backgroundColor: '#34D399',
                            }]
                        }}/>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow"
                         title="Average length of time for installment plans.">
                        <h2 className="text-xl font-bold">Average Installment Duration</h2>
                        <p className="text-3xl">{installmentData.avgDuration} months</p>
                    </div>

                </div>

            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <Footer/>
        </div>
    );
}
