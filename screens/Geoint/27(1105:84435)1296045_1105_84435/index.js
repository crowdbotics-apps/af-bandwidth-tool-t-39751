import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_1105_84436}>
        <View style={styles.View_I1105_84436_620_49855}>
          <Text style={styles.Text_I1105_84436_620_49855}>
            USAF Network Throughput Tester
          </Text>
        </View>
        <View style={styles.View_I1105_84436_620_49856}>
          <View style={styles.View_I1105_84436_620_49857}>
            <Text style={styles.Text_I1105_84436_620_49857}>Welcome</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3472f17b-a076-433d-96cf-a0c8d2cf243f"
            }}
            style={styles.ImageBackground_I1105_84436_620_49897}
          />
          <View style={styles.View_I1105_84436_620_49940}>
            <Text style={styles.Text_I1105_84436_620_49940}>
              This tool quickly assesses your effective network throughput at
              any point in the network that you measure. The results of the test
              will be securely shared within Kessel Run to help drive
              improvements to the USAF network infrastructure.
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1105_84437}>
        <View style={styles.View_I1105_84437_36_2432}>
          <View style={styles.View_I1105_84437_36_2432_0_246}>
            <View style={styles.View_I1105_84437_36_2432_0_246_0_252}>
              <View style={styles.View_I1105_84437_36_2432_0_246_0_253}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/460c50df-e17f-48a3-855f-e54c3ad9e84c"
                  }}
                  style={styles.ImageBackground_I1105_84437_36_2432_0_246_0_256}
                />
              </View>
              <View style={styles.View_I1105_84437_36_2432_0_246_0_259}>
                <Text style={styles.Text_I1105_84437_36_2432_0_246_0_259}>
                  Built by Kessel Run
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I1105_84437_36_2432_0_247}>
            <Text style={styles.Text_I1105_84437_36_2432_0_247}>
              This tool is for US Government use only. If you have any questions
              or concerns, please email [redacted]
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(33, 33, 33, 1)" },
  View_2: { height: hp("123%") },
  View_1105_84436: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("99%"),
    minHeight: hp("99%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1105_84436_620_49855: {
    flexGrow: 1,
    width: wp("89%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1105_84436_620_49855: {
    color: "rgba(133, 147, 166, 1)",
    fontSize: 24.017974853515625,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1105_84436_620_49856: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("85%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1105_84436_620_49857: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1105_84436_620_49857: {
    color: "rgba(242, 247, 252, 1)",
    fontSize: 24.017974853515625,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I1105_84436_620_49897: {
    width: wp("66%"),
    minWidth: wp("66%"),
    height: hp("48%"),
    minHeight: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("14%")
  },
  View_I1105_84436_620_49940: {
    width: wp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("72%"),
    justifyContent: "center"
  },
  Text_I1105_84436_620_49940: {
    color: "rgba(133, 147, 166, 1)",
    fontSize: 12.738663673400879,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.14754998683929443,
    textTransform: "none"
  },
  View_1105_84437: {
    width: wp("67%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("108%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1105_84437_36_2432: {
    flexGrow: 1,
    width: wp("67%"),
    height: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1105_84437_36_2432_0_246: {
    flexGrow: 1,
    width: wp("32%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1105_84437_36_2432_0_246_0_252: {
    flexGrow: 1,
    width: wp("32%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1105_84437_36_2432_0_246_0_253: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1105_84437_36_2432_0_246_0_256: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1105_84437_36_2432_0_246_0_259: {
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I1105_84437_36_2432_0_246_0_259: {
    color: "rgba(133, 147, 166, 1)",
    fontSize: 11.0083646774292,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1105_84437_36_2432_0_247: {
    flexGrow: 1,
    width: wp("67%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_I1105_84437_36_2432_0_247: {
    color: "rgba(133, 147, 166, 1)",
    fontSize: 11.0083646774292,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
