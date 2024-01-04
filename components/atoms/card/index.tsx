import { View, Text } from "react-native";
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
    // Update current date and time every second
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

  const renderCard = useMemo(() => {
    return (
      <View style={{ margin: 24, width: 200 }}>
        <View
          style={{
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
          }}>
          <Text
            style={{
              marginLeft: 16,
              marginTop: 16,
              fontWeight: "bold",
            }}>
            {title}
          </Text>
          <View
            style={{
              margin: 5,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <View style={{ width: 100, height: 100, borderRadius: 10 }}>
              <Text
                style={{
                  color: "black",
                }}>
                <AnimatedCircularProgress
                  size={94}
                  width={6}
                  fill={percent_trash}
                  tintColor="#00e0ff"
                  backgroundColor="#3d5875">
                  {(fill) => (
                    <Text
                      style={{ color: "black" }}>{`${percent_trash} %`}</Text>
                  )}
                </AnimatedCircularProgress>
              </Text>
            </View>
          </View>
          <Text
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            {currentDateTime}
          </Text>
          <View
            style={{
              margin: 5,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}></View>
        </View>
      </View>
    );
  }, [currentDateTime]);
  return renderCard;
};
