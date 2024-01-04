import { StyleSheet } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { db } from "../../constants/Firebase";
import { Text, View } from "../../components/Themed";
import { MainCard } from "../../components/atoms/card";
import { AppButton } from "../../components/atoms/button";
import { useCallback, useEffect, useState } from "react";
import { onValue, ref, get } from "firebase/database";

export default function TabOneScreen() {
  const [distance, setDistance] = useState(0);

  const handleOpenTrash = useCallback(() => {
    console.log("open");
  }, []);

  useEffect(() => {
    let isMounted = true;
    const getData = async () => {
      const snapshot = await get(ref(db, "/distance"));
      const data = snapshot.val() || {};
      if (isMounted) {
        setDistance(data);
      }
    };
    getData();
    return () => {
      isMounted = false;
    };
  }, []);

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
