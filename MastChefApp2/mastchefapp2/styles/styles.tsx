import { StyleSheet } from "react-native";
// <!-- * Code Attribution:- ByteGrad (2024) Try Catch Error Handling With TypeScript [Online]. Available at: https://youtu.be/Q1euMQFI35I?si=atpoDwrnBK0Boekp (Accessed: 3 October 2024).Varsity College Durban North (2024) [Module Name] Module Manual. Durban: Varsity College.This code has been developed using the concepts and practices discussed in these sources.-->
// 

export const styles = StyleSheet.create({
  headerArea: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#2E7D32", // Dark Green
  },
  mainBox: {
    flex: 1,
    padding: 16,
    backgroundColor: "#E8F5E9", // Light Green Background
    width: "100%",
  },
  themeStyle: {
    maxHeight: 400,
    backgroundColor: "#A5D6A7", // Soft Green
    elevation: 2,
    borderRadius: 8,
    marginVertical: 8,
  },
  themeStyleAlt: {
    maxHeight: 400,
    backgroundColor: "#C8E6C9", // Alternate Soft Green
    elevation: 1,
    borderRadius: 8,
    marginTop: 16,
  },
  itemBox: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: "#FFFFFF", // White for Contrast
    borderRadius: 8,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  foodTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1B5E20", // Deep Green
    marginVertical: 4,
  },
  detailText: {
    fontSize: 16,
    color: "#388E3C", // Medium Green
    marginVertical: 2,
  },
  mainHeading: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#1B5E20", // Deep Green
    marginBottom: 16,
  },
  subDetails: {
    fontSize: 14,
    color: "#4CAF50", // Standard Green
    textAlign: "center",
  },
  subHeading: {
    fontSize: 20,
    fontWeight: "600",
    color: "#2E7D32", // Dark Green
    marginVertical: 8,
  },
  inputWrapper: {
    alignItems: "center",
    width: "100%",
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 8,
    elevation: 2,
  },
  textField: {
    width: "100%",
    height: 40,
    backgroundColor: "#C8E6C9", // Soft Green
    paddingHorizontal: 12,
    marginVertical: 8,
    borderRadius: 4,
    fontSize: 16,
    borderColor: "#A5D6A7", // Border in matching green shade
    borderWidth: 1,
  },
  descriptionField: {
    width: "100%",
    height: 80,
    backgroundColor: "#C8E6C9",
    paddingHorizontal: 12,
    marginVertical: 8,
    borderRadius: 4,
    fontSize: 16,
    borderColor: "#A5D6A7",
    borderWidth: 1,
    textAlignVertical: "top",
    paddingTop: 8,
  },
  actionButton: {
    backgroundColor: "#43A047", // Vibrant Green
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginVertical: 8,
    alignItems: "center",
    width: "100%",
  },
  secondaryButton: {
    backgroundColor: "#D32F2F", // Light Green
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginVertical: 8,
    alignItems: "center",
    width: "100%",
  },
  buttonLabel: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  secondaryButtonLabel: {
    color: "#2E7D32", // Dark Green
    fontSize: 16,
    fontWeight: "600",
  },
  summaryBox: {
    backgroundColor: "#C8E6C9", // Soft Green
    padding: 16,
    borderRadius: 8,
    width: "100%",
    marginVertical: 8,
  },
  summaryLabel: {
    fontSize: 14,
    color: "#388E3C", // Medium Green
    marginVertical: 2,
  },
  removeButton: {
    backgroundColor: "#D32F2F", // Red for Remove Button
    padding: 12,
    borderRadius: 8,
    marginTop: 8,
    alignItems: "center",
  },
  textContainer: {
    marginBottom: 16,
  },
  averageBox: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
  },
  removeButtonLabel: {
    color: "#FFFFFF",
    fontWeight: "600",
  },
  titleText: {
    marginVertical: 16,
  },
  imageStyle: {
    height: 200,
    width: "100%",
    borderRadius: 8,
  },
  stickyButton: {
    padding: 16,
    backgroundColor: "#E8F5E9", // Light Green
    borderTopWidth: 1,
    borderTopColor: "#A5D6A7", // Subtle Border
  },
});
