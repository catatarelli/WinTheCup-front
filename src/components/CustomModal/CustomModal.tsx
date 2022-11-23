import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSquareXmark } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./CustomModalStyled";
import { closeModalActionCreator } from "../../redux/features/uiSlice/uiSlice";

const CustomModal = (): JSX.Element => {
  const { modal, isError } = useAppSelector(({ ui }) => ui);
  const dispatch = useAppDispatch();

  return (
    <>
      {modal && (
        <View style={isError ? styles.modalError : styles.modalSuccess}>
          <Text style={styles.modalText} testID="modalMessage">
            {modal}
          </Text>
          <TouchableOpacity onPress={() => dispatch(closeModalActionCreator())}>
            <Text>
              <FontAwesomeIcon icon={faSquareXmark} size={30} />
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default CustomModal;
