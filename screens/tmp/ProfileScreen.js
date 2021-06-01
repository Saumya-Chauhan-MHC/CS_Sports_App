import React from 'react';
import { 
  View, 
  Text, 
  Button, 
  ScrollView,
  SafeAreaView,
  StatusBar,
  StyleSheet 
} from 'react-native';

import Colors from './Colors';

//import { Colors } from 'react-native/Libraries/NewAppScreen';

import DrugAlcoholLinksList from '../components/drugAlcoholLinks';
import EatingDisordersLinksList from '../components/eatingDisordersLinks';
import DomesticChildAbuseLinksList from '../components/domesticChildAbuseLinks';
import LearningDisabilitiesLinksList from '../components/learningDisabilitiesLinks';
import MentalHealthSuicideLinksList from '../components/MentalHealthSuicideLinks';
import SexualAssaultLinksList from '../components/sexualAssaultLinks';
import STDLinksList from '../components/STDLinks';

const ProfileScreen = () => {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style={styles.body}>
              <View style={styles.separator} />
              <View style={styles.body}>
                <Text style={styles.linkSectionTitle}>Domestic Abuse And Child Abuse Hotline</Text>
                <DomesticChildAbuseLinksList />
              </View>
              <View style={styles.separator} />
              <View style={styles.body}>
                <Text style={styles.linkSectionTitle}>Drug and Alcohol</Text>
                <DrugAlcoholLinksList />
              </View>
              <View style={styles.separator} />
              <View style={styles.body}>
                <Text style={styles.linkSectionTitle}>Eating Disorders</Text>
                <EatingDisordersLinksList />
              </View>
              <View style={styles.separator} />
              <View style={styles.body}>
                <Text style={styles.linkSectionTitle}>Learning Disabilities and ADHD</Text>
                <LearningDisabilitiesLinksList />
              </View>
              <View style={styles.separator} />
              <View style={styles.body}>
                <Text style={styles.linkSectionTitle}>Mental Health Crisis Lines / Suicide Hotlines</Text>
                <MentalHealthSuicideLinksList />
              </View>
              <View style={styles.separator} />
              <View style={styles.body}>
                <Text style={styles.linkSectionTitle}>Rape and Sexual Assault</Text>
                <SexualAssaultLinksList />
              </View>
              <View style={styles.separator} />
              <View style={styles.body}>
                <Text style={styles.linkSectionTitle}>STD / AIDS</Text>
                <STDLinksList />
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
  },
  linkSectionTitle: {
    marginTop: 16,
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    color: Colors.black,
  },
  separator: {
    marginTop: 8,
    backgroundColor: Colors.light,
    height: 1,
  },
});
