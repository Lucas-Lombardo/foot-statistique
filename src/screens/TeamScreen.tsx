import * as React from "react";
import {useState} from "react";
import {StyleSheet, View} from "react-native";
import {Picker} from '@react-native-picker/picker';
import {League, PremierLeague} from "../mocks/League";

export default function TeamScreen(): JSX.Element {
    const [selectedLeague, setSelectedLeague] = useState<string>();
    const [selectedTeam, setSelectedTeam] = useState<string>();
    return (
      <View style={styles.container}>
          <Picker
              selectedValue={selectedLeague}
              onValueChange={(itemValue, itemIndex) =>
                  setSelectedLeague(itemValue)
              }
              style={{ width: '100%', height: '50%' }}
          >
              {League.map((league, index) => (
                  <Picker.Item key={index} label={league.name} value={league.id} />
              ))}
          </Picker>

          <Picker
              selectedValue={selectedTeam}
              onValueChange={(itemValue, itemIndex) =>
                  setSelectedTeam(itemValue)
              }
              style={{ width: '100%', height: '50%' }}
          >
              {PremierLeague.map((team, index) => (
                  <Picker.Item key={index} label={team.name} value={team.id} />
              ))}
          </Picker>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});