import React from 'react';
import './Tariff.css';
import { FaCar, FaUsers, FaClock, FaRoad, FaMapMarkedAlt, FaPlus, FaUserTie} from 'react-icons/fa';
import HeroPages from '../components/HeroPages';
import Footer from '../components/Footer';

const tariffData = [
  {
    vehicleType: "Swift Dzire/ Toyota Etios",
    seaters: 4,
    hourlyRate: 1200,
    dailyRate: 2400,
    AdditionalKms: 13,
    AdditionalHrs:220 ,
    outstationMin: 3250,
    outstationAdd: 13,
    driverBatta: 600,
  },
  {
    vehicleType: "Toyota Innova",
    seaters: 6,
    hourlyRate: 1800,
    dailyRate: 3600,
    AdditionalKms: 18,
    AdditionalHrs:450 ,
    outstationMin: 4500,
    outstationAdd: 18,
    driverBatta: 600,
  },
  {
    vehicleType: "Toyota Innova",
    seaters: 7,
    hourlyRate: 2000,
    dailyRate: 3800,
    AdditionalKms: 19,
    AdditionalHrs:550 ,
    outstationMin: 4700,
    outstationAdd: 19,
    driverBatta: 600,
  },
  {
    vehicleType: "Innova Crysta",
    seaters: 6,
    hourlyRate: 2200,
    dailyRate: 4400,
    AdditionalKms: 20,
    AdditionalHrs: 500,
    outstationMin: 5000,
    outstationAdd: 20,
    driverBatta: 700,
  },
  {
    vehicleType: "Innova Crysta",
    seaters: 7,
    hourlyRate: 2100,
    dailyRate: 4500,
    AdditionalKms: 21,
    AdditionalHrs: 550,
    outstationMin: 5100,
    outstationAdd: 21,
    driverBatta: 700,
  },
  {
    vehicleType: "Toyota Innova Hycross",
    seaters: 6,
    // hourlyRate: ,
    dailyRate: 5500,
    AdditionalKms: 28,
    AdditionalHrs:600 ,
    outstationMin: 6250,
    outstationAdd: 25,
    driverBatta: 800,
  },
  {
    vehicleType: "Toyota Corolla Altis",
    seaters: 4,
    // hourlyRate: 2200,
    // dailyRate: 4400,
    AdditionalKms: 25,
    // AdditionalHrs: 500,
    outstationMin: 6200,
    outstationAdd: 25,
    driverBatta: 700,
  },
  {
    vehicleType: "Toyota Fortuner",
    seaters: 7,
    hourlyRate: 3800,
    dailyRate: 5600,
    AdditionalKms: 55,
    AdditionalHrs: 500,
    outstationMin: 13700,
    outstationAdd: 55,
    driverBatta: 800,
  },
  {
    vehicleType: "Kia Carnival",
    seaters: 7,
    // hourlyRate: 3800,
    dailyRate: 5600,
    AdditionalKms: 50,
    AdditionalHrs: 500,
    outstationMin: 12500,
    outstationAdd: 50,
    driverBatta: 800,
  },
];

const TariffPage = () => {
  return (
    <section className="tariff-page">
        <HeroPages name="Tariff" />
    <div className="tariff-page">
      <div className="tariff-car">
      <h2><FaCar /> Car Rental Tariff</h2>
      <table>
      <thead>
  <tr>
    <th><FaCar /> Car Type</th>
    <th><FaUsers /> Seaters</th>
    <th><FaClock /> 4 Hrs/40 Kms</th>
    <th><FaClock /> 8 Hrs/80 Kms</th>
    <th><FaRoad /> Additional Kms</th>
    <th><FaClock /> Additional Hrs</th>
    <th><FaMapMarkedAlt /> Outstation Min.</th>
    <th><FaPlus /> Outstation Add Per KM</th>
    <th><FaUserTie /> Driver Batta</th>
  </tr>
</thead>

<tbody>
  {tariffData.map((item, index) => (
    <tr key={index}>
      <td>{item.vehicleType}</td>
      <td>{item.seaters}</td>
      <td>{item.hourlyRate ? `₹${item.hourlyRate}` : '-'}</td>
      <td>{item.dailyRate ? `₹${item.dailyRate}` : '-'}</td>
      <td>{item.AdditionalKms ? `₹${item.AdditionalKms}` : '-'}</td>
      <td>{item.AdditionalHrs ? `₹${item.AdditionalHrs}` : '-'}</td>
      <td>{item.outstationMin ? `₹${item.outstationMin}` : '-'}</td>
      <td>{item.outstationAdd ? `₹${item.outstationAdd}` : '-'}</td>
      <td>{item.driverBatta ? `₹${item.driverBatta}` : '-'}</td>
    </tr>
  ))}
</tbody>

</table>
    </div>

      <div className="tariff-terms">
  <h2>Tariff Terms and Conditions</h2>
  <ul>
    <li>Distance Calculation: We calculate starting and closing kilometers per hour from our garage to your destination.</li>
    <li>Additional Km and Hour charges are applicable after the base limit.</li>
    <li>Outstation minimum km calculation is based on 250 Kms/day.</li>
    <li>Driver Batta is applicable for outstation trips per day.</li>
    <li>Toll, Parking, Interstate Permit, and other charges are extra as per actuals.</li>
    <li>Night halt charges may apply for overnight travel.</li>
    <li>GST will be charged as applicable.</li>
    <li>Prices are subject to change without prior notice.</li>
  </ul>
</div>
     
    </div>
    <Footer />
    </section>
  
  );
};

export default TariffPage;
