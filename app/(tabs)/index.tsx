import { StyleSheet } from "react-native";

import { db } from "../../constants/Firebase";
import { View } from "../../components/Themed";
import { MainCard } from "../../components/atoms/card";
import { AppButton } from "../../components/atoms/button";
import { useCallback, useEffect, useMemo, useState } from "react";
import { onValue, ref, get, set, off } from "firebase/database";
import messaging from "@react-native-firebase/messaging";

export default function TabOneScreen() {
  const [distance, setDistance] = useState(0);

  const handleOpenTrash = useCallback(() => {
    try {
      set(ref(db, "/servo_position"), 1);
      setTimeout(() => {
        set(ref(db, "/servo_position"), 0);
      }, 4500);
    } catch (error) {
      console.error("Error updating servo position:", error);
    }
  }, []);
  const getData = () => {
    const databaseRef = ref(db, "/distance");

    onValue(
      databaseRef,
      (snapshot) => {
        const data = snapshot.val() || {};
        setDistance(data);
      },
      (error) => {
        console.error("Error getting data:", error);
      }
    );
  };

  useEffect(() => {
    getData();

    // Cleanup the listener when the component unmounts
    return () => {
      const databaseRef = ref(db, "/distance");
      off(databaseRef); // This removes the listener
    };
  }, []);

  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log("Authorization status:", authStatus);
    }
  };

  const getToken = async () => {
    const token = await messaging().getToken();
    console.log("token: ", token);
  };

  useEffect(() => {
    requestUserPermission();
    getToken();
  }, []);

  const renderHome = useMemo(() => {
    return (
      <View style={styles.container}>
        <MainCard
          title="Trash"
          quanlity={"100"}
          percent_trash={distance} //truyển vào
        />
        <AppButton title="Open trash" size="sm" onPress={handleOpenTrash} />
      </View>
    );
  }, [distance]);

  return renderHome;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
