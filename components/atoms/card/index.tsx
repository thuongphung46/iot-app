import { View, Text, StyleSheet } from "react-native";
import { FC, useEffect, useMemo, useState } from "react";
import { AnimatedCircularProgress } from "react-native-circular-progress";

export interface Props {
  quanlity?: string;
  percent_trash: number;
  title?: string;
}
export const MainCard: FC<Props> = ({ quanlity, title, percent_trash }) => {
  const [currentDateTime, setCurrentDateTime] = useState<string>(
    new Date().toLocaleString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(
        new Date().toLocaleString("en-GB", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  const roundedPercentTrash = useMemo(
    () => Math.round(percent_trash * (1 / 5) + Number.EPSILON) / (1 / 5),
    [percent_trash]
  );

  const renderCard = useMemo(() => {
    return (
      <View style={styles.screenContainer}>
        <View style={styles.appCardContainer}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.wapperChartProcess}>
            <View style={styles.innerChart}>
              <Text style={styles.colorBlack}>
                <AnimatedCircularProgress
                  size={94}
                  width={6}
                  fill={roundedPercentTrash}
                  tintColor={"#00e0ff"}
                  backgroundColor={"#3d5875"}
                  children={() => (
                    <Text
                      style={{
                        color: "black",
                      }}>{`${roundedPercentTrash} %`}</Text>
                  )}></AnimatedCircularProgress>
              </Text>
            </View>
          </View>
          <Text style={styles.currentDate}>{currentDateTime}</Text>
        </View>
      </View>
    );
  }, [currentDateTime]);
  return renderCard;
};

const styles = StyleSheet.create({
  screenContainer: {
    margin: 24,
    width: 200,
  },
  appCardContainer: {
    backgroundColor: "white",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    marginLeft: 16,
    marginTop: 16,
    fontWeight: "bold",
  },

  wapperChartProcess: {
    margin: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  innerChart: { width: 100, height: 100, borderRadius: 10 },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  colorBlack: {
    color: "#000",
  },
  currentDate: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
