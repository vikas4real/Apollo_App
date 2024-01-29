import {ScrollView, StatusBar, StyleSheet, View} from 'react-native';
import React, {useRef} from 'react';
import Header from '../Components/Header';
import FullBanner from '../Components/FullBanner';
import HalfBanner from '../Components/HalfBanner';

const MedicineScreen = () => {
  const isCarousel = useRef(null);
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="#1d6c6e" />
      <Header />
      <ScrollView style={{flexGrow: 1}}>
        <FullBanner
          RibbonimgPath={require('../assets/ribbonright.png')}
          imgPath={require('../assets/medicine.png')}
          subtitle1="2 Hour Delivery"
          subtitle2="Apollo Pharmacy"
          title="Buy Medicines and Essentials"
        />
        <FullBanner
          RibbonimgPath={require('../assets/ribbonright.png')}
          imgPath={require('../assets/microscope.png')}
          subtitle1="2 Hour Delivery"
          subtitle2="Apollo Pharmacy"
          title="Apollo Health-Checks and Tests"
        />
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 10,
            gap: 10,
          }}>
          <HalfBanner
            imgPath={require('../assets/doctor.png')}
            title="Doctor Digital Consult"
            subtitle="15 mins"
          />
          <HalfBanner
            imgPath={require('../assets/hospital.png')}
            title="Clinic/ Hospital Visit"
            subtitle="Pre-book"
          />
        </View>
        <FullBanner
          imgPath={require('../assets/prescription.png')}
          title="Order via Prescription"
        />
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 10,
            gap: 10,
          }}>
          <HalfBanner
            imgPath={require('../assets/apollodental.png')}
            title="Apollo Dental"
          />
          <HalfBanner
            imgPath={require('../assets/apollohealthcare.png')}
            title="Apollo HealthCare"
          />
        </View>
        <FullBanner
          imgPath={require('../assets/orders.png')}
          title="My Orders"
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
export default MedicineScreen;
