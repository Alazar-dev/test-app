import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import Modal from "react-native-modal";
import tw from "tailwind-react-native-classnames";

export default function UserModal({ name, image, visible, onConfirm }) {
  return (
    <Modal
      style={tw`flex flex-col justify-between items-center bg-white rounded-xl`}
      isVisible={visible}
      backdropTransitionOutTiming={0}
    >
      <ScrollView>
        <Image
          style={tw`w-80 h-96`}
          source={{
            uri: image,
          }}
        />
        <View style={tw`flex flex-row`}>
          <Text>
            Name: <Text style={tw`font-bold`}>{name}</Text>
          </Text>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={tw`w-40 flex flex-row justify-center m-4`}
        onPress={onConfirm}
      >
        <Text style={tw`text-sm`}>Close</Text>
      </TouchableOpacity>
    </Modal>
  );
}
