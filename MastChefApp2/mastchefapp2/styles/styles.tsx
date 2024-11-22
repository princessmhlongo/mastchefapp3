import { StyleSheet } from "react-native";

// <!-- * Code Attribution:- ByteGrad (2024) Try Catch Error Handling With TypeScript [Online]. Available at: https://youtu.be/Q1euMQFI35I?si=atpoDwrnBK0Boekp (Accessed: 3 October 2024). Varsity College Durban North (2024) [Module Name] Module Manual. Durban: Varsity College. This code has been developed using the concepts and practices discussed in these sources.-->

export const styles = StyleSheet.create({
  headerArea: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#FFFFFF", // White background
    borderBottomColor: "#B0B0B0", // Grey border
    borderBottomWidth: 1,
  },
  mainBox: {
    flex: 1,
    padding: 16,
    backgroundColor: "#FFFFFF", // White background
    width: "100%",
  },
  themeStyleAlt: {
    maxHeight: 400,
    backgroundColor: "#FFFFFF", // White background
    elevation: 2,
    borderRadius: 8,
    marginVertical: 8,
    borderColor: "#B0B0B0", // Grey border
    borderWidth: 1,
    padding: 16,
  },
  itemBox: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: "#FFFFFF", // White for Contrast
    borderRadius: 8,
    borderColor: "#B0B0B0", // Grey border
    borderWidth: 1,
    elevation: 2,
  },
  foodTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#000000", // Black text
    marginVertical: 4,
  },
  detailText: {
    fontSize: 16,
    color: "#000000", // Black text
    marginVertical: 2,
  },
  summaryBox: {
    backgroundColor: "#FFFFFF", // White background
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    borderColor: "#B0B0B0", // Grey border
    borderWidth: 1,
  },
  summaryLabel: {
    fontSize: 14,
    color: "#000000", // Black text
    marginVertical: 2,
  },
  actionButton: {
    backgroundColor: "#90EE90", // Light Green
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginVertical: 8,
    alignItems: "center",
    width: "100%",
  },
  secondaryButton: {
    backgroundColor: "#90EE90", // Light Green
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginVertical: 8,
    alignItems: "center",
    width: "100%",
    borderColor: "#B0B0B0", // Grey border
    borderWidth: 1,
  },
  buttonLabel: {
    color: "#FFFFFF", // White text
    fontSize: 16,
    fontWeight: "600",
  },
  secondaryButtonLabel: {
    color: "#FFFFFF", // White text
    fontSize: 16,
    fontWeight: "600",
  },
});
