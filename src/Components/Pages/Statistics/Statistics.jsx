
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";



export default function Statistics() {
  const [newStatistics, setNewStatistics] = useState([]);

  const donations = useLoaderData()

  const storedDonations = JSON.parse(localStorage.getItem('donations')) || [];
  
  const data = [
    { name: "totalDonation", value:  donations.length},
    { name: "myDonation", value: storedDonations?.length  }
  ];

 
  const COLORS = ['#FF444A', '#00C49F'];


  useEffect(() => {

    const inTotalDonations = donations.length + storedDonations?.length;
    const myDonations = (storedDonations?.length* 100 )/ inTotalDonations;
    const totalDonations = (donations.length* 100 )/ inTotalDonations;

    setNewStatistics([myDonations.toFixed(2), totalDonations.toFixed(2)])
    console.log(newStatistics)


  }, [])


  return (
    <div style={{ width: "100%", height: 350 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie dataKey="value" data={data} fill={COLORS} labelLine={false}>
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="mx-auto flex gap-4 w-fit mt-2 text-white">
        <h4 style={{backgroundColor: "#FF444A"}} className="p-2 rounded-xl">Total Donation : {newStatistics[1]} </h4>
        <h4 style={{backgroundColor: "#00C49F"}} className="p-2 rounded-xl ">My Donation : {newStatistics[0]} </h4>
      </div>
    </div>
  );
}
